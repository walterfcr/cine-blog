import { getFeaturedReviews } from './review'
import { getMovieDetails } from './tmdb'
import { mapHeroData } from '@/lib/mappers/hero.mapper'

export async function getHeroData() {
  const reviews = await getFeaturedReviews()

  const heroSlides = await Promise.all(
    reviews.map(async (review) => {
      const movie = await getMovieDetails(String(review.movieId))

      return mapHeroData(movie, review)
    }),
  )

  return heroSlides
}
