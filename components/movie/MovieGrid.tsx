import MovieCard from './MovieCard'
import type { Movie } from '@/types/Movie'

interface Props {
  movies: Movie[]
}

function MovieGrid({ movies }: Props) {
  return (
    <section
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-8
      "
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  )
}

export default MovieGrid
