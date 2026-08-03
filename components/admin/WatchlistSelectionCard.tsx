import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { getImageUrl } from '@/lib/utils/image'

interface WatchlistSelectionCardProps {
  title: string
  year: number
  rating: number

  posterPath: string | null

  notes: string
  priority: number

  onNotesChange: (value: string) => void
  onPriorityChange: (value: number) => void
}

function WatchlistSelectionCard({
  title,
  year,
  rating,
  posterPath,
  notes,
  priority,
  onNotesChange,
  onPriorityChange,
}: WatchlistSelectionCardProps) {
  return (
    <Card className="space-y-6 p-6">
      <div className="flex gap-6">
        <img
          src={getImageUrl(posterPath, 'w342')}
          alt={title}
          className="h-64 rounded-lg object-cover"
        />

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>

            <p className="text-text-secondary">
              {year} • ★ {rating.toFixed(1)}
            </p>
          </div>

          <div>
            <label className="mb-2 block font-medium">Nota (opcional)</label>

            <Input
              value={notes}
              placeholder="Ej. La recomendó un amigo..."
              onChange={(e) => onNotesChange(e.target.value)}
            />
          </div>

          <div className="max-w-[120px]">
            <label className="mb-2 block font-medium">Prioridad</label>

            <Input
              type="number"
              value={priority}
              onChange={(e) => onPriorityChange(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default WatchlistSelectionCard
