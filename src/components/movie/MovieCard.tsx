import { Link } from 'react-router-dom'

import type { Movie } from '@/types/Movie'

import Card from '@/components/ui/Card'

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <Link to={`/movies/${movie.id}`} className="block">
      <Card
        className="
        group
        cursor-pointer
        overflow-hidden
        transition-all
        duration-300
        hover:border-accent
      "
      >
        <div className="relative overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="
           block
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
              items-end
              justify-center
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
              p-5
            "
          >
            <p
              className="
              mb-2
              translate-y-2
              opacity-0
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
            >
              Descubrir →
            </p>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-text-primary">
            {movie.title}
          </h2>

          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-text-muted">{movie.year}</span>

            <span className="text-rating">★ {movie.tmdbRating}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default MovieCard
