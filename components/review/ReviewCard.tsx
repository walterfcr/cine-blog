import Link from 'next/link'
import { LuCalendar } from 'react-icons/lu'

import type { Review } from '@/types/Review'

import Card from '@/components/ui/Card'
import { formatDate } from '@/lib/utils/formatDate'
import { getImageUrl } from '@/lib/utils/image'

interface ReviewCardProps {
  review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Link href={`/reviews/${review.id}`} className="block h-full no-underline">
      <Card
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          transition-all
          duration-300
          hover:border-accent
          hover:shadow-xl
        "
      >
        <div className="relative h-36 overflow-hidden md:h-28">
          {' '}
          <img
            src={getImageUrl(review.backdropPath, 'w780')}
            alt={review.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-surface
              via-surface/70
              to-transparent
            "
          />
        </div>

        <div className="relative flex flex-1 flex-col md:flex-row px-6 pb-6">
          <img
            src={getImageUrl(review.posterPath, 'w342')}
            alt={review.title}
            className="
                -mt-8
  mx-auto
  h-52
  w-36
  rounded-lg
  border-2
  border-border
  object-cover
  shadow-lg
  transition-transform
  duration-500
  group-hover:scale-105

  md:mt-0
  md:mx-0
  md:h-48
  md:w-32
            "
          />

          <div className="flex flex-1 flex-col pt-5 md:pt-4 md:pl-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-rating">
                ★ {review.rating}/10
              </div>

              <div className="flex items-center gap-2 text-sm text-text-muted">
                <LuCalendar />
                <span>{formatDate(review.createdAt)}</span>
              </div>
            </div>

            <h3
              className="
                mt-3
                min-h-[5rem]
                line-clamp-2
                text-3xl
                font-bold
                leading-tight
                transition-colors
                duration-300
                group-hover:text-accent
              "
            >
              {review.title}
            </h3>

            <p
              className="
                mt-4
                min-h-[7rem]
                flex-1
                line-clamp-4
                leading-7
                text-text-secondary
              "
            >
              {review.excerpt}
            </p>

            <div className="mt-auto pt-6 ">
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
