import { useParams } from 'react-router-dom'
import { getReview } from '@/services/review.service'

function ReviewDetail() {
  const { reviewId } = useParams()
  const review = reviewId ? getReview(reviewId) : undefined

  if (!review) {
    return <p>Review not found.</p>
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">{review.title}</h1>

      <p className="mt-4 text-text-secondary">{review.content}</p>
    </div>
  )
}

export default ReviewDetail
