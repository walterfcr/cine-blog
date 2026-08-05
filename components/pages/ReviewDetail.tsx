'use client'

import Link from 'next/link'
import { getReview } from '@/lib/services/review'
import Badge from '@/components/ui/Badge'
import { getMovieDetails } from '@/lib/services/tmdb'
import { useQuery } from '@tanstack/react-query'
import BackButton from '@/components/ui/BackButton'
import { formatDate } from '@/lib/utils/formatDate'
import Spinner from '@/components/ui/Spinner'
import { getImageUrl } from '@/lib/utils/image'
import { reviewKeys } from '@/lib/queries/query-keys'
import ReviewGrid from '@/components/review/ReviewGrid'
import { getReviews } from '@/lib/services/review'

interface ReviewDetailProps {
  reviewId: string
}

function ReviewDetail({ reviewId }: ReviewDetailProps) {
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

  const { data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
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
    <article className="space-y-16 px-6 sm:px-0">
      {review.backdropPath && (
        <div
          className="
      relative
      min-h-[520px]
      overflow-hidden
      rounded-2xl
      border
      border-border
      md:min-h-[580px]
      lg:min-h-[620px]
    "
        >
          {/* Background */}
          <img
            src={getImageUrl(review.backdropPath, 'original')}
            alt={review.title}
            className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-center
      "
          />

          {/* Overall cinematic darkening */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/35" />

          {/* Text readability gradient */}
          <div
            className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/90
        via-black/55
        to-black/10
      "
          />

          {/* Bottom fade */}
          <div
            className="
        absolute
        inset-x-0
        bottom-0
        h-48
        bg-gradient-to-t
        from-black/70
        to-transparent
      "
          />

          {/* Content */}
          <div
            className="
        relative
        z-10
        flex
        min-h-[520px]
        flex-col
        justify-end
        p-7
        md:min-h-[580px]
        md:p-12
        lg:min-h-[620px]
        lg:p-16
      "
          >
            <BackButton variant="overlay" />
            <div className="mt-auto max-w-3xl">
              <header className="space-y-5">
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-semibold text-rating">
                    ★ {review.rating}/10
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/40" />

                  <span className="text-sm text-white/70">
                    {formatDate(review.createdAt)}
                  </span>
                </div>

                {/* Title */}
                <h1
                  className="
              max-w-3xl
              text-4xl
              font-bold 
              leading-[0.98]
              tracking-tight
              text-white
              [text-shadow:0_3px_12px_rgba(0,0,0,0.8)]
              md:text-5xl
              lg:text-7xl
            "
                >
                  {review.title}
                </h1>

                {/* Movie */}
                {movie && (
                  <div className="pt-1">
                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-white/50
                    "
                    >
                      Película
                    </p>

                    <Link
                      href={`/movies/${movie.id}`}
                      className="
                      mt-1
                      inline-block
                      text-lg
                      font-semibold
                      text-white/90
                      [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]
                      transition-colors
                      hover:text-rating
                      md:text-xl
                    "
                    >
                      {movie.title}
                    </Link>
                  </div>
                )}
              </header>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl py-16">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
            La reseña
          </span>

          <span className="h-px flex-1 bg-border" />
        </div>
      </div>

      <section className="mx-auto max-w-3xl space-y-8">
        {review.content.split('\n\n').map((paragraph, index) => (
          <p
            key={index}
            className={`
        text-base
        leading-8
        text-text-secondary
        md:text-lg
        md:leading-9
        ${index === 0 ? 'text-lg leading-9 md:text-xl md:leading-10' : ''}
      `}
          >
            {paragraph}
          </p>
        ))}
      </section>
      {movie && (
        <div className="mx-auto max-w-3xl border-t border-border pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
                Reseña
              </p>

              <p className="mt-2 text-sm text-text-secondary">
                Publicada el {formatDate(review.createdAt)}
              </p>
            </div>

            <Link
              href={`/movies/${movie.id}`}
              className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              border
              border-border
              px-5
              py-3
              font-semibold
              text-text-primary
              transition-colors
              hover:border-accent
              hover:text-accent
            "
            >
              Ver ficha de la película →
            </Link>
          </div>
        </div>
      )}

      {reviews && reviews.length > 1 && (
        <section className="mx-auto max-w-6xl space-y-8">
          <div className="border-t border-border pt-12">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Cine Blog
              </p>

              <div className="mt-3 flex items-end justify-between gap-4">
                <h2 className="text-3xl tracking-tight md:text-4xl">
                  Más reseñas
                </h2>

                <Link
                  href="/reviews"
                  className="
                  hidden
                  text-sm
                  font-semibold
                  text-text-muted
                  transition-colors
                  hover:text-accent
                  sm:block
                "
                >
                  Ver todas →
                </Link>
              </div>
            </div>

            <div className="mt-2">
              <ReviewGrid
                reviews={reviews
                  .filter((item) => item.id !== review.id)
                  .slice(0, 2)}
              />
            </div>
          </div>
        </section>
      )}
    </article>
  )
}

export default ReviewDetail
