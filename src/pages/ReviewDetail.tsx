import { Link, useParams } from 'react-router-dom'
import { getReview } from '@/services/review.supabase'
import Badge from '@/components/ui/Badge'
import { getMovieDetails } from '@/services/tmdb'
import { useQuery } from '@tanstack/react-query'
import BackButton from '@/components/ui/BackButton'
import { formatDate } from '@/utils/formatDate'
import Spinner from '@/components/ui/Spinner'

function ReviewDetail() {
  const { reviewId } = useParams()
  const {
    data: review,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['review', reviewId],
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
    <article className="mx-auto max-w-4xl space-y-8">
      <BackButton />
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <Badge variant="accent">Reseña</Badge>

          <span className="font-semibold text-rating">
            ★ {review.rating}/10
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {review.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <span>Por {review.author}</span>

          <span>•</span>

          <span>{formatDate(review.createdAt)}</span>
        </div>
        {movie && (
          <p className="text-text-secondary">
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
