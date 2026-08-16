'use client'

import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

import Spinner from '@/components/ui/Spinner'
import BackButton from '@/components/ui/BackButton'
import MovieCast from '@/components/movie/MovieCast'

import {
  getMovieCredits,
  getMovieDetails,
  getMovieVideos,
} from '@/lib/services/tmdb'

import { getReviewByMovie } from '@/lib/services/review'

interface MovieDetailProps {
  movieId: string
}

function formatRuntime(runtime: number | null) {
  if (!runtime) {
    return 'No disponible'
  }

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  if (hours === 0) {
    return `${minutes} min`
  }

  return `${hours} h ${minutes} min`
}

function MovieDetail({ movieId }: MovieDetailProps) {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieDetails(movieId),
    enabled: !!movieId,
  })

  const { data: review } = useQuery({
    queryKey: ['movie-review', movie?.id],
    queryFn: () => getReviewByMovie(movie!.id),
    enabled: !!movie,
  })

  const { data: credits } = useQuery({
    queryKey: ['movie-credits', movieId],
    queryFn: () => getMovieCredits(movieId),
    enabled: !!movieId,
  })

  const { data: videos } = useQuery({
    queryKey: ['movie-videos', movieId],
    queryFn: () => getMovieVideos(movieId),
    enabled: !!movieId,
  })

  const trailer = videos?.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer',
  )

  const director = credits?.crew.find((person) => person.job === 'Director')

  const writers = credits?.crew.filter(
    (person) =>
      person.job === 'Writer' ||
      person.job === 'Screenplay' ||
      person.job === 'Story',
  )

  if (!movieId) {
    return <p className="text-text-secondary">Película no encontrada.</p>
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error || !movie) {
    return (
      <p className="text-text-secondary">
        No se pudo cargar la información de la película.
      </p>
    )
  }

  return (
    <div className="space-y-12 px-6">
      <BackButton />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="
            h-[28rem]
            w-full
            object-cover
            md:h-[34rem]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-6
            md:p-10
            lg:p-12
          "
        >
          <div className="max-w-5xl space-y-5">
            <p className="inter-text text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Ficha técnica
            </p>

            <h1
              className="
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              {movie.title}
            </h1>

            <div className="inter-text flex flex-wrap items-center gap-4 text-sm text-white/80 md:text-base">
              <span>{movie.year}</span>

              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />

              <span>{formatRuntime(movie.runtime)}</span>

              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />

              <span className="font-semibold text-rating">
                TMDB ★ {movie.tmdbRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-text-primary">Sinopsis</h2>

        <p className="max-w-3xl leading-8 text-text-secondary">
          {movie.overview ||
            'No hay una sinopsis disponible para esta película.'}
        </p>
      </section>

      {/* Technical information */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-text-primary">Información</h2>

        <div className="divide-y divide-border border-y border-border">
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Dirección
            </span>

            <span className="text-text-primary">
              {director?.name || 'No disponible'}
            </span>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Guion
            </span>

            <span className="text-text-primary">
              {writers && writers.length > 0
                ? writers
                    .map((writer) => writer.name)
                    .filter(
                      (name, index, names) => names.indexOf(name) === index,
                    )
                    .join(' · ')
                : 'No disponible'}
            </span>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Título original
            </span>

            <span className="text-text-primary">
              {movie.originalTitle || movie.title}
            </span>
          </div>

          {/* Runtime */}
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Duración
            </span>

            <span className="text-text-primary">
              {formatRuntime(movie.runtime)}
            </span>
          </div>

          {/* Genres */}
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Géneros
            </span>

            <span className="text-text-primary">
              {movie.genres.length > 0
                ? movie.genres.join(' · ')
                : 'No disponible'}
            </span>
          </div>

          {/* Original language */}
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Idioma original
            </span>

            <span className="uppercase text-text-primary">
              {movie.originalLanguage || 'No disponible'}
            </span>
          </div>

          {/* Production countries */}
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              País
            </span>

            <span className="text-text-primary">
              {movie.productionCountries.length > 0
                ? movie.productionCountries.join(' · ')
                : 'No disponible'}
            </span>
          </div>

          {/* Production companies */}
          <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              Productoras
            </span>

            <span className="text-text-primary">
              {movie.productionCompanies.length > 0
                ? movie.productionCompanies.join(' · ')
                : 'No disponible'}
            </span>
          </div>
        </div>
      </section>

      {/* Butaca 24 review */}
      <section className="space-y-5 rounded-2xl border border-border bg-surface p-6 md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Butaca 24
          </p>

          <h2 className="mt-2 text-2xl font-bold">Mi opinión</h2>
        </div>

        {review ? (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xl text-rating">
                {'★'.repeat(Math.round(review.rating))}
                {'☆'.repeat(10 - Math.round(review.rating))}
              </span>

              <span className="font-semibold text-rating">
                {review.rating}/10
              </span>
            </div>

            <p className="leading-8 text-text-secondary">{review.excerpt}</p>

            <Link
              href={`/reviews/${review.id}`}
              className="
                inline-flex
                items-center
                rounded-lg
                bg-accent
                px-5
                py-3
                font-medium
                text-white
                transition-colors
                hover:bg-accent-hover
              "
            >
              Leer reseña completa →
            </Link>
          </>
        ) : (
          <p className="leading-8 text-text-secondary">
            Todavía no he publicado una reseña para esta película.
          </p>
        )}
      </section>

      {trailer && (
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-text-primary">Trailer</h2>

          <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Cast */}
      {credits?.cast && credits.cast.length > 0 && (
        <MovieCast cast={credits.cast} />
      )}
    </div>
  )
}

export default MovieDetail
