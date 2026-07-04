import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Spinner from '@/components/ui/Spinner'
import { getMovieDetails } from '@/services/tmdb'
import PageHeader from '@/components/ui/PageHeader'
import BackButton from '@/components/ui/BackButton'

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
            <PageHeader title={movie?.title ?? ''} />

            <div className="mt-3 flex items-center gap-6 text-sm text-zinc-300">
              <span>{movie?.year}</span>

              <span className="text-rating">
                ★ {movie?.tmdbRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </section>
      <p className="max-w-3xl leading-8 text-text-secondary">
        {movie?.overview}
      </p>
    </div>
  )
}

export default MovieDetail
