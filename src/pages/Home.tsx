import MovieGrid from '@/components/movie/MovieGrid'
import type { Movie } from '@/types/Movie'
import type { TmdbMovie } from '@/types/TmdbMovie'
import { useEffect } from 'react'
import { getPopularMovies } from '@/services/tmdb'

function Home() {
  useEffect(() => {
    getPopularMovies().then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <h1 className="text-4xl">Home</h1>
    </div>
  )
}

export default Home
