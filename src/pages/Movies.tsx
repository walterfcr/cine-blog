import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import MovieGrid from '@/components/movie/MovieGrid'
import Spinner from '@/components/ui/Spinner'

import { useQuery } from '@tanstack/react-query'
import { getPopularMovies } from '@/services/tmdb.service'

function Movies() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: getPopularMovies,
  })

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <p className="text-text-secondary">
        No se pudieron cargar las películas.
      </p>
    )
  }

  return (
    <Container>
      <SectionTitle>Películas</SectionTitle>

      <MovieGrid movies={movies ?? []} />
    </Container>
  )
}

export default Movies
