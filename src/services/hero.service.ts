import { getFeaturedReview } from './review.service'
import { getMovieDetails } from './tmdb.service'
import { mapHeroData } from '../mappers/hero.mapper'

export async function getHeroData() {
  const review = await getFeaturedReview()

  const movie = await getMovieDetails(String(review.movieId))

  return mapHeroData(movie, review)
}
