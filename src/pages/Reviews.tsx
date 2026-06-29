import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ReviewGrid from '@/components/review/ReviewGrid'
import { reviews } from '@/data/reviews'

function Reviews() {
  return (
    <Container className="py-16">
      <SectionTitle>Reseñas</SectionTitle>

      <ReviewGrid reviews={reviews} />
    </Container>
  )
}

export default Reviews
