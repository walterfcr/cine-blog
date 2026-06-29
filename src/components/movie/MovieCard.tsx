import type { Movie } from '@/types/Movie'
import Card from '@/components/ui/Card'

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <Card>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg">{movie.title}</h2>

        <div className="mt-2 text-sm text-text-muted">
          {movie.year} · ⭐ {movie.tmdbRating}
        </div>
      </div>
    </Card>
  )
}

export default MovieCard
