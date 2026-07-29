import Card from '@/components/ui/Card'
import type { WatchlistMovie } from '@/types/WatchlistMovie'
import { getImageUrl } from '@/utils/image'

interface Props {
  movie: WatchlistMovie
}

function WatchlistCard({ movie }: Props) {
  const priority = {
    1: '🟢 Baja prioridad',
    2: '🟢 Baja prioridad',
    3: '🟡 Prioridad media',
    4: '🟠 Alta prioridad',
    5: '🔴 Muy alta prioridad',
  }[movie.priority]

  return (
    <Card
      className="
        group
        overflow-hidden
        transition-all
        duration-300
        hover:border-accent
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={getImageUrl(movie.posterPath, 'w342')}
          alt={movie.title}
          className="
            aspect-[2/3]
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

            flex
            flex-col
            justify-end

            bg-gradient-to-t
            from-black
            via-black/70
            to-black/20

            p-5

            opacity-0
            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        >
          <p className="text-sm leading-6 text-white">
            {movie.notes ||
              'Esta película está pendiente de convertirse en una nueva reseña.'}
          </p>

          <p className="mt-5 font-semibold text-rating">{priority}</p>

          <p className="mt-2 text-sm font-medium text-white/80">
            Próximamente en el blog →
          </p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-text-primary">{movie.title}</h3>

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-text-muted">{movie.year}</span>

          <span className="text-rating">★ {movie.tmdbRating.toFixed(1)}</span>
        </div>
      </div>
    </Card>
  )
}

export default WatchlistCard
