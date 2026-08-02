import { Link, useParams } from 'react-router-dom'
import { getReview } from '@/services/review.service'
import Badge from '@/components/ui/Badge'
import { getMovieDetails } from '@/services/tmdb.service'
import { useQuery } from '@tanstack/react-query'
import BackButton from '@/components/ui/BackButton'
import { formatDate } from '@/utils/formatDate'
import Spinner from '@/components/ui/Spinner'
import { getImageUrl } from '@/utils/image'
import { reviewKeys } from '@/queries/queryKeys'

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
    <article className="space-y-16">
      {review.backdropPath && (
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={getImageUrl(review.backdropPath, 'original')}
            alt={review.title}
            className="  h-[360px] w-full object-cover md:h-[420px] lg:h-[600px]"
          />

          <div className="absolute inset-0 black/20 dark:bg-black/35" />

          <div
            className="
              absolute
              inset-y-0
              left-0
              w-full md:w-[70%]
              lg:w-[65%]

              bg-gradient-to-r
              from-black/95
              via-black/60
              to-transparent
                z-10
                flex
                max-w-3xl
                flex-col
                justify-end
                pb-12
                md:justify-center
                md:pb-16
                p-8
                md:p-16
              "
          >
            <BackButton />

            <header className="max-w-3xl space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="accent">Reseña</Badge>

                <span className="inter-text font-semibold text-rating">
                  ★ {review.rating}/10
                </span>
              </div>

              <h1 className="text-2xl font-bold leading-[1.05] text-white md:text-4xl lg:text-6xl">
                {review.title}
              </h1>

              <div className="inter-text text-sm text-white/80">
                {formatDate(review.createdAt)}
              </div>

              {movie && (
                <div className="space-y-1">
                  <p className="inter-text text-sm uppercase tracking-widest text-white/50">
                    Película
                  </p>

                  <Link
                    to={`/movies/${movie.id}`}
                    className="
                  
                    text-xl
                    font-semibold
                    text-white
                    transition-colors
                    hover:text-accent
                  "
                  >
                    {movie.title}
                  </Link>
                </div>
              )}
            </header>
          </div>
        </div>
      )}

      <div className="my-16 h-px bg-border" />

      <section className="mx-auto max-w-3xl space-y-8">
        {review.content.split('\n\n').map((paragraph, index) => (
          <p
            key={index}
            className="
              text-base
              leading-8
              text-text-secondary
              md:text-lg
              md:leading-9
              
            "
          >
            {paragraph}
          </p>
        ))}
      </section>
    </article>
  )
}

export default ReviewDetail
