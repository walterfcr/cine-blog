import MovieGrid from '@/components/movie/MovieGrid'
import type { Movie } from '@/types/Movie'

const movies: Movie[] = [
  {
    id: 1,
    title: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    year: 2014,
    rating: 8.7,
  },
  {
    id: 2,
    title: 'The Batman',
    poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    year: 2022,
    rating: 7.8,
  },
]

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Últimas películas</h1>

      <MovieGrid movies={movies} />
    </div>
  )
}

export default Home
