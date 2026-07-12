import Button from '@/components/ui/Button'
import { getImageUrl } from '@/utils/image'

interface MovieSelectionCardProps {
  title: string
  year: number
  rating: number

  posterPath: string | null
  backdropPath: string | null

  onChangePoster: () => void
  onChangeBackdrop: () => void
}

function MovieSelectionCard({
  title,
  year,
  rating,
  posterPath,
  backdropPath,
  onChangePoster,
  onChangeBackdrop,
}: MovieSelectionCardProps) {
  return (
    <div className="space-y-6 rounded-xl border border-border bg-surface p-6">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-text-secondary">
          {year} • ★ {rating.toFixed(1)}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-medium">Poster</h3>

          <img
            src={getImageUrl(posterPath, 'w342')}
            alt={title}
            className="h-72 rounded-lg object-cover"
          />

          <Button variant="secondary" onClick={onChangePoster}>
            Cambiar
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium">Backdrop</h3>

          <img
            src={getImageUrl(backdropPath, 'w780')}
            alt={title}
            className="h-40 w-full rounded-lg object-cover"
          />

          <Button variant="secondary" onClick={onChangeBackdrop}>
            Cambiar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieSelectionCard
