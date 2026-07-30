import { Link } from 'react-router-dom'

import type { Movie } from '@/types/Movie'

import Card from '@/components/ui/Card'

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <Link to={`/movies/${movie.id}`} className="block h-full">
      <Card
        className="
          group
          h-full
          cursor-pointer
          overflow-hidden
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-accent
          hover:shadow-xl
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
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-5
              translate-y-4
              opacity-0
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <p className="inter-text text-sm font-medium text-white">
              Ver info →
            </p>
          </div>
        </div>

        <div className="p-5">
          <h2
            className="
              text-lg
              font-semibold
              leading-tight
              text-text-primary
              transition-colors
              duration-300
              group-hover:text-accent
            "
          >
            {movie.title}
          </h2>

          <p className="inter-text mt-2 text-sm text-text-muted">
            {movie.year}
          </p>
        </div>
      </Card>
    </Link>
  )
}

export default MovieCard
