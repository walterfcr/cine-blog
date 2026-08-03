import ReviewDetail from '@/components/pages/ReviewDetail'

interface ReviewDetailPageProps {
  params: Promise<{
    reviewId: string
  }>
}

export default async function ReviewDetailPage({ params }: ReviewDetailPageProps) {
  const { reviewId } = await params

  return <ReviewDetail reviewId={reviewId} />
}
