import { LuTrash2 } from 'react-icons/lu'

import type { WatchlistMovie } from '@/types/WatchlistMovie'

import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { getImageUrl } from '@/utils/image'

interface AdminWatchlistCardProps {
  movie: WatchlistMovie
  onDelete: (id: string) => void
}

const priorityLabels = {
  1: '🟢 Baja',
  2: '🟡 Media',
  3: '🟠 Alta',
  4: '🔴 Muy alta',
  5: '⭐ Máxima',
}

function AdminWatchlistCard({ movie, onDelete }: AdminWatchlistCardProps) {
  return (
    <Card className="flex gap-6 p-5">
      <img
        src={getImageUrl(movie.posterPath, 'w342')}
        alt={movie.title}
        className="
          h-44
          w-32
          flex-shrink-0
          rounded-lg
          object-cover
        "
      />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">{movie.title}</h2>

            <p className="mt-2 text-text-secondary">
              {movie.year} • ★ {movie.tmdbRating.toFixed(1)}
            </p>

            {movie.notes && (
              <p className="mt-3 text-text-secondary">"{movie.notes}"</p>
            )}
          </div>

          <span className="font-medium text-accent">
            {priorityLabels[movie.priority as keyof typeof priorityLabels]}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <Button variant="secondary" onClick={() => onDelete(movie.id)}>
            <LuTrash2 />
            Eliminar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default AdminWatchlistCard
