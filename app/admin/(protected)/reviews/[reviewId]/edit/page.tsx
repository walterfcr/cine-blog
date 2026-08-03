'use client'

import { useParams } from 'next/navigation'
import EditReview from '@/components/pages/admin/EditReview'

export default function EditReviewPage() {
  const params = useParams()
  const reviewId = params?.reviewId as string

  return <EditReview reviewId={reviewId} />
}
