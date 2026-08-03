import type { Movie } from '@/types/Movie'
import type { Review } from '@/types/Review'
import type { HeroData } from '@/types/HeroData'

export function mapHeroData(movie: Movie, review: Review): HeroData {
  return {
    movieTitle: movie.title,
    backdrop: movie.backdrop,

    reviewTitle: review.title,
    excerpt: review.excerpt,

    rating: review.rating,

    readReviewUrl: `/reviews/${review.id}`,
    movieDetailsUrl: `/movies/${movie.id}`,
  }
}
