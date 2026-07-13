import type { Review } from '@/types/Review'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { LuStar, LuCalendar } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { formatDate } from '@/utils/formatDate'
import { getImageUrl } from '@/utils/image'

interface ReviewCardProps {
  review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Link to={`/reviews/${review.id}`} className="block h-full no-underline">
      <Card
        className="
        group
        flex
        h-full
        overflow-hidden
        p-6
        transition-all
        duration-300
        hover:border-accent
        hover:shadow-xl
      "
      >
        <div className="flex h-full gap-6">
          <img
            src={getImageUrl(review.posterPath, 'w342')}
            alt={review.title}
            className="
            h-64
            w-40
            flex-shrink-0
            rounded-lg
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
          />

          <div className="flex flex-1 flex-col">
            <div className="mb-4 flex items-center justify-between">
              <Badge variant="accent">Reseña</Badge>

              <div className="flex items-center gap-1 text-rating">
                <LuStar />
                <span>{review.rating}/10</span>
              </div>
            </div>

            <h3
              className="
              mb-3
              text-2xl
              font-bold
              transition-colors
              duration-300
              group-hover:text-accent
            "
            >
              {review.title}
            </h3>

            <p
              className="
              mb-6
              flex-1
              line-clamp-3
              leading-7
              text-text-secondary
            "
            >
              {review.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <LuCalendar />

                <span>{formatDate(review.createdAt)}</span>
              </div>

              <span
                className="
                font-medium
                text-accent
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              >
                Leer reseña →
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ReviewCard
