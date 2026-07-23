import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import ReviewGrid from '@/components/review/ReviewGrid'
import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/ui/Spinner'
import { getReviews } from '@/services/review.service'
import { reviewKeys } from '@/queries/queryKeys'

function Reviews() {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: reviewKeys.all,
    queryFn: getReviews,
  })

  console.log(reviews)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>Ha ocurrido un error.</p>
  }
  return (
    <Container className="py-16">
      <SectionTitle>Reseñas</SectionTitle>

      <ReviewGrid reviews={reviews ?? []} />
    </Container>
  )
}

export default Reviews
