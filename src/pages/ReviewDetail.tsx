import { useParams } from 'react-router-dom'
import { getReview } from '@/services/review.service'
import Badge from '@/components/ui/Badge'
import { getMovieDetails } from '@/services/tmdb'
import { useQuery } from '@tanstack/react-query'

function ReviewDetail() {
  const { reviewId } = useParams()
  const review = reviewId ? getReview(reviewId) : undefined

  const { data: movie } = useQuery({
    queryKey: ['movie', review?.movieId],
    queryFn: () => getMovieDetails(String(review!.movieId)),
    enabled: !!review,
  })

  if (!review) {
    return <p>Review not found.</p>
  }
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <Badge variant="accent">Reseña</Badge>

          <span className="text-rating">★ {review.rating}/10</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight">{review.title}</h1>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <span>{review.author}</span>

          <span>{review.createdAt}</span>
        </div>
        {movie && (
          <p className="text-text-secondary">
            Reseña de:{' '}
            <span className="font-semibold text-text-primary">
              {movie.title}
            </span>
          </p>
        )}
      </header>

      <div className="h-px bg-border" />

      <section>
        <p className="leading-8 text-lg text-text-secondary">
          {review.content}
        </p>
      </section>
    </article>
  )
}

export default ReviewDetail
