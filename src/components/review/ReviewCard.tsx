import type { ReviewCardData } from '@/types/ReviewCardData'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { LuStar, LuUser, LuCalendar } from 'react-icons/lu'

interface ReviewCardProps {
  review: ReviewCardData
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <Badge variant="accent">Reseña</Badge>

        <div className="flex items-center gap-1 text-rating">
          <LuStar />
          <span>{review.rating}/10</span>
        </div>
      </div>

      <h3 className="mb-3 text-2xl font-bold text-text-primary">
        {review.title}
      </h3>

      <p className="mb-6 text-text-secondary">{review.excerpt}</p>

      <div className="flex gap-4 text-sm text-text-muted">
        <span className="flex items-center gap-1">
          <LuUser />
          {review.author}
        </span>

        <span className="flex items-center gap-1">
          <LuCalendar />
          {review.createdAt}
        </span>
      </div>
    </Card>
  )
}

export default ReviewCard
