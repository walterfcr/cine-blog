import type { Movie } from '@/types/Movie'

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <article className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg">{movie.title}</h2>

        <div className="text-sm text-zinc-400 mt-2">
          {movie.year} · ⭐ {movie.rating}
        </div>
      </div>
    </article>
  )
}

export default MovieCard
