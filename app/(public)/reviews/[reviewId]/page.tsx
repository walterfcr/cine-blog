import type { Metadata } from 'next'

import ReviewDetail from '@/components/pages/ReviewDetail'
import { getReview } from '@/lib/services/review'
import { getImageUrl } from '@/lib/utils/image'

interface ReviewDetailPageProps {
  params: Promise<{
    reviewId: string
  }>
}

export async function generateMetadata({
  params,
}: ReviewDetailPageProps): Promise<Metadata> {
  const { reviewId } = await params

  const review = await getReview(reviewId)

  return {
    title: `${review.title} — Cine Blog`,
    description: review.excerpt,

    openGraph: {
      title: `${review.title} — Cine Blog`,
      description: review.excerpt,
      type: 'article',
      images: review.backdropPath
        ? [
            {
              url: getImageUrl(review.backdropPath, 'w780'),
              width: 780,
              height: 439,
              alt: review.movieTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${review.title} — Cine Blog`,
      description: review.excerpt,
      images: review.backdropPath
        ? [getImageUrl(review.backdropPath, 'w780')]
        : [],
    },
  }
}

export default async function ReviewDetailPage({
  params,
}: ReviewDetailPageProps) {
  const { reviewId } = await params

  return <ReviewDetail reviewId={reviewId} />
}
