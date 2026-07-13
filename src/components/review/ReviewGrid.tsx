import ReviewCard from './ReviewCard'
import type { Review } from '@/types/Review'

interface ReviewGridProps {
  reviews: Review[]
}

function ReviewGrid({ reviews }: ReviewGridProps) {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  )
}

export default ReviewGrid
