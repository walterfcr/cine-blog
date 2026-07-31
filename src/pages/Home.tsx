import { useQuery } from '@tanstack/react-query'

import Hero from '@/components/hero/Hero'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ReviewGrid from '@/components/review/ReviewGrid'
import Spinner from '@/components/ui/Spinner'

import { getHeroData } from '@/services/hero.service'
import { getReviews } from '@/services/review.service'
import { getWatchlistMovies } from '@/services/watchlist.service'
import WatchlistCarousel from '@/components/watchlist/WatchlistCarousel'

function Home() {
  const {
    data: hero,
    isLoading: heroLoading,
    error: heroError,
  } = useQuery({
    queryKey: ['hero'],
    queryFn: getHeroData,
  })

  const {
    data: reviews,
    isLoading: reviewsLoading,
    error: reviewsError,
  } = useQuery({
    queryKey: ['home-reviews'],
    queryFn: getReviews,
  })

  const {
    data: watchlist,
    isLoading: watchlistLoading,
    error: watchlistError,
  } = useQuery({
    queryKey: ['watchlist'],
    queryFn: getWatchlistMovies,
  })

  if (heroLoading || reviewsLoading || watchlistLoading) {
    return <Spinner />
  }

  if (heroError || reviewsError || watchlistError) {
    return <p>Ha ocurrido un error.</p>
  }

  return (
    <Container className="space-y-24">
      {hero && <Hero data={hero} />}

      <section className="space-y-8">
        <div className="space-y-3">
          <SectionTitle>Últimas reseñas</SectionTitle>

          <p className="max-w-2xl text-text-secondary">
            Críticas personales de películas que considero imprescindibles,
            olvidadas o simplemente interesantes.
          </p>
        </div>

        <ReviewGrid reviews={reviews?.slice(0, 6) ?? []} />
      </section>

      {/* Watchlist goes here */}
      <section className="space-y-8">
        <div className="space-y-3">
          <SectionTitle>Próximamente en el blog</SectionTitle>

          <p className="max-w-2xl text-text-secondary">
            Películas que tengo pendientes y que probablemente terminarán
            convirtiéndose en una futura reseña.
          </p>
        </div>

        <WatchlistCarousel movies={watchlist ?? []} />
      </section>
    </Container>
  )
}

export default Home
