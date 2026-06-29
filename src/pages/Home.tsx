import Hero from '@/components/hero/Hero'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import MovieGrid from '@/components/movie/MovieGrid'
import { useQuery } from '@tanstack/react-query'
import { getPopularMovies } from '@/services/tmdb'
import { featuredHero } from '@/data/home'

function Home() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: getPopularMovies,
  })

  if (isLoading) {
    return <p>Cargando películas...</p>
  }

  if (error) {
    return <p>Ha ocurrido un error.</p>
  }

  return (
    <Container>
      <Hero data={featuredHero} />
      <SectionTitle>Películas populares</SectionTitle>

      <MovieGrid movies={movies ?? []} />
    </Container>
  )
}

export default Home
