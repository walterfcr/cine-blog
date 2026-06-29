import type { Movie } from '@/types/Movie'
import type { Review } from '@/types/Review'
import type { ReviewCardData } from '@/types/ReviewCardData'

export function mapReviewCardData(
  review: Review,
  movie: Movie,
): ReviewCardData {
  return {
    id: review.id,
    title: review.title,
    excerpt: review.excerpt,
    content: review.content,
    rating: review.rating,
    author: review.author,
    createdAt: review.createdAt,
    movie,
  }
}
