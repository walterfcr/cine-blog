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
    <Container>
      {hero && <Hero data={hero} />}

      <SectionTitle>Últimas reseñas</SectionTitle>

      <ReviewGrid reviews={reviews?.slice(0, 6) ?? []} />
    </Container>
  )
}

export default Home
