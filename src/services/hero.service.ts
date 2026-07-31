import { getFeaturedReviews } from './review.service'
import { getMovieDetails } from './tmdb.service'
import { mapHeroData } from '../mappers/hero.mapper'

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
