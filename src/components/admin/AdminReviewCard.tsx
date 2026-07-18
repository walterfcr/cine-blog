import { Link } from 'react-router-dom'
import { LuPencil, LuTrash2, LuStar, LuEye, LuEyeOff } from 'react-icons/lu'

import type { Review } from '@/types/Review'

import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { getImageUrl } from '@/utils/image'

interface AdminReviewCardProps {
  review: Review
  onDelete: (id: string) => void
}

function AdminReviewCard({ review, onDelete }: AdminReviewCardProps) {
  return (
    <Card className="flex gap-6 p-5">
      <img
        src={getImageUrl(review.posterPath, 'w342')}
        alt={review.title}
        className="
          h-44
          w-32
          rounded-lg
          object-cover
          flex-shrink-0
        "
      />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">{review.title}</h2>

            <p className="mt-2 text-text-secondary">{review.excerpt}</p>
          </div>

          <span className="text-rating">★ {review.rating}/10</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {review.featured && (
            <Badge variant="accent">
              <LuStar />
              Destacada
            </Badge>
          )}

          <Badge variant={review.published ? 'success' : 'warning'}>
            {review.published ? (
              <>
                <LuEye />
                Publicada
              </>
            ) : (
              <>
                <LuEyeOff />
                Borrador
              </>
            )}
          </Badge>
        </div>

        <div className="mt-auto flex gap-3 pt-6">
          <Link to={`/admin/reviews/${review.id}`}>
            <Button variant="primary">
              <LuPencil />
              Editar
            </Button>
          </Link>

          <Button variant="secondary" onClick={() => onDelete(review.id)}>
            <LuTrash2 />
            Eliminar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default AdminReviewCard
