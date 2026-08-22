'use client'

import Link from 'next/link'

import { getReview, getReviews } from '@/lib/services/review'
import { getMovieDetails } from '@/lib/services/tmdb'

import { useQuery } from '@tanstack/react-query'

import Spinner from '@/components/ui/Spinner'
import ShareButtons from '@/components/ui/ShareButtons'
import ReviewGrid from '@/components/review/ReviewGrid'
import ReviewArticle from '@/components/review/ReviewArticle'

import { reviewKeys } from '@/lib/queries/query-keys'
import { formatDate } from '@/lib/utils/formatDate'

interface ReviewDetailProps {
  reviewId: string
}

function ReviewDetail({ reviewId }: ReviewDetailProps) {
  const {
    data: review,
    isLoading,
    error,
  } = useQuery({
    queryKey: reviewKeys.detail(reviewId),
    queryFn: () => getReview(reviewId),
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
      <ReviewArticle review={review} movie={movie ?? null} />

      <section className="mx-auto max-w-3xl">
        <ShareButtons title={review.title} />
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
