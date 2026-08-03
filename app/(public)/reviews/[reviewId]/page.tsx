'use client'

import { useParams } from 'next/navigation'
import ReviewDetail from '@/components/pages/ReviewDetail'

export default function ReviewDetailPage() {
  const params = useParams()
  const reviewId = params?.reviewId as string

  return <ReviewDetail reviewId={reviewId} />
}
