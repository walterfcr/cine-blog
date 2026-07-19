import { Link, useParams } from 'react-router-dom'
import { getReview } from '@/services/review.supabase'
import Badge from '@/components/ui/Badge'
import { getMovieDetails } from '@/services/tmdb'
import { useQuery } from '@tanstack/react-query'
import BackButton from '@/components/ui/BackButton'
import { formatDate } from '@/utils/formatDate'
import Spinner from '@/components/ui/Spinner'
import { getImageUrl } from '@/utils/image'
import { reviewKeys } from '@/services/queryKeys'

function ReviewDetail() {
  const { reviewId } = useParams()
  const {
    data: review,
    isLoading,
    error,
  } = useQuery({
    queryKey: reviewKeys.detail(reviewId!),
    queryFn: () => getReview(reviewId!),
    enabled: !!reviewId,
  })
  const { data: movie } = useQuery({
    queryKey: ['movie', review?.movieId],
    queryFn: () => getMovieDetails(String(review!.movieId)),
    enabled: !!review,
  })

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>Something went wrong.</p>
  }

  if (!review) {
    return <p>Review not found.</p>
  }
  return (
    <article className="space-y-10">
      {review.backdropPath && (
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={getImageUrl(review.backdropPath, 'original')}
            alt={review.title}
            className="h-[600px] w-full object-cover"
          />

          <div
            className="
            absolute
            inset-0
            bg-black/40
          "
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-background
            via-background/70
            to-transparent
          "
          />

          <div
            className="
             absolute
              inset-0
              z-10
              flex
              max-w-3xl
              flex-col
              justify-center
              p-8
              md:p-16
          "
          >
            <BackButton />
            <header className="max-w-3xl space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="accent">Reseña</Badge>

                <span className="font-semibold text-rating">
                  ★ {review.rating}/10
                </span>
              </div>

              <h1 className="text-4xl font-bold md:text-6xl">{review.title}</h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                <span>•</span>

                <span>{formatDate(review.createdAt)}</span>
              </div>

              {movie && (
                <p className="text-lg text-text-secondary">
                  Reseña de{' '}
                  <Link
                    to={`/movies/${movie.id}`}
                    className="
                    font-semibold
                    text-text-primary
                    transition-colors
                    hover:text-accent
                  "
                  >
                    {movie.title}
                  </Link>
                </p>
              )}
            </header>
          </div>
        </div>
      )}

      <div className="my-2 h-px bg-border" />

      <section>
        <p className="leading-8 text-lg text-text-secondary">
          {review.content}
        </p>
      </section>
    </article>
  )
}

export default ReviewDetail
