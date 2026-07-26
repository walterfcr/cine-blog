import { useQuery } from '@tanstack/react-query'

import Hero from '@/components/hero/Hero'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ReviewGrid from '@/components/review/ReviewGrid'
import Spinner from '@/components/ui/Spinner'

import { getHeroData } from '@/services/hero.service'
import { getAllReviews } from '@/services/review.service'

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
    queryFn: getAllReviews,
  })

  if (heroLoading || reviewsLoading) {
    return <Spinner />
  }

  if (heroError || reviewsError) {
    return <p>Ha ocurrido un error.</p>
  }

  return (
    <Container className="space-y-24">
      {hero && <Hero data={hero} />}

      <div className="space-y-3">
        <SectionTitle>Últimas reseñas</SectionTitle>

        <p className="max-w-2xl text-text-secondary">
          Críticas personales de películas que considero imprescindibles,
          olvidadas o simplemente interesantes.
        </p>
      </div>

      <ReviewGrid reviews={reviews?.slice(0, 6) ?? []} />
      <div className="border-t border-border pt-20">
        <p className="text-center text-text-muted italic">
          Más contenido próximamente...
        </p>
      </div>
    </Container>
  )
}

export default Home
