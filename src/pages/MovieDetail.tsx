import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import Spinner from '@/components/ui/Spinner'
import PageHeader from '@/components/ui/PageHeader'
import BackButton from '@/components/ui/BackButton'
import MovieCast from '@/components/movie/MovieCast'
import { getMovieCredits, getMovieDetails } from '@/services/tmdb.service'
import { getReviewByMovie } from '@/services/review.service'

function MovieDetail() {
  const { movieId } = useParams()

  if (!movieId) {
    return <p>Movie not found.</p>
  }

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieDetails(movieId),
  })

  const { data: review } = useQuery({
    queryKey: ['movie-review', movie?.id],
    queryFn: () => getReviewByMovie(movie!.id),
    enabled: !!movie,
  })

  const { data: cast } = useQuery({
    queryKey: ['movie-cast', movieId],
    queryFn: () => getMovieCredits(movieId),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>Something went wrong.</p>
  }

  return (
    <div className="space-y-8">
      <BackButton />
      <section className="space-y-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={movie?.backdrop}
            alt={movie?.title}
            className="h-96 w-full object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-10
            "
          >
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                FICHA TÉCNICA
              </p>

              <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
                {movie?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-white/80">
                <span>{movie?.year}</span>

                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />

                <span className="font-semibold text-rating">
                  TMDB ★ {movie?.tmdbRating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Sinopsis</h2>

        <p className="max-w-3xl leading-8 text-text-secondary">
          {movie?.overview}
        </p>
      </section>

      <section className="space-y-5 rounded-2xl border border-border bg-surface p-8">
        <h2 className="text-2xl font-bold">Mi opinión</h2>

        {review ? (
          <>
            <div className="flex items-center gap-3">
              <span className="text-rating text-xl">
                {'★'.repeat(Math.round(review.rating))}
                {'☆'.repeat(10 - Math.round(review.rating))}
              </span>

              <span className="font-semibold text-rating">
                {review.rating}/10
              </span>
            </div>

            <p className="leading-8 text-text-secondary">{review.excerpt}</p>

            <Link
              to={`/reviews/${review.id}`}
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

      {cast && <MovieCast cast={cast} />}
    </div>
  )
}

export default MovieDetail
