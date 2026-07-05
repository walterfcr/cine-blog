import Hero from '@/components/hero/Hero'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import MovieGrid from '@/components/movie/MovieGrid'
import { useQuery } from '@tanstack/react-query'
import { getPopularMovies } from '@/services/tmdb'
import { getHeroData } from '@/services/hero.service'
import Spinner from '@/components/ui/Spinner'

function Home() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: getPopularMovies,
  })

  const {
    data: hero,
    isLoading: heroLoading,
    error: heroError,
  } = useQuery({
    queryKey: ['hero'],
    queryFn: getHeroData,
  })

  if (isLoading || heroLoading) {
    return <Spinner />
  }

  if (error || heroError) {
    return <p>Ha ocurrido un error.</p>
  }

  return (
    <Container>
      {hero && <Hero data={hero} />}
      <SectionTitle>Películas populares</SectionTitle>

      <MovieGrid movies={movies ?? []} />
    </Container>
  )
}

export default Home
