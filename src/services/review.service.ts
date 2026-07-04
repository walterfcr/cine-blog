import { reviews } from '@/data/reviews'

export function getReviews() {
  return reviews.filter((review) => review.published)
}

export function getReview(id: string) {
  return reviews.find((review) => review.id === id)
}

export function getReviewByMovieId(movieId: number) {
  return reviews.find(
    (review) => review.movieId === movieId && review.published,
  )
}

export async function getReviewAsync(id: string) {
  return getReview(id)
}
