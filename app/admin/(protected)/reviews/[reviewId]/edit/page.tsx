import EditReview from '@/components/pages/admin/EditReview'

export const dynamic = 'force-dynamic'

interface EditReviewPageProps {
  params: Promise<{
    reviewId: string
  }>
}

export default async function EditReviewPage({ params }: EditReviewPageProps) {
  const { reviewId } = await params

  return <EditReview reviewId={reviewId} />
}
