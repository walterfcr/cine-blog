import { getFeaturedReview } from './review.supabase'
import { getMovieDetails } from './tmdb'
import { mapHeroData } from './hero.mapper'

export async function getHeroData() {
  const review = await getFeaturedReview()

  const movie = await getMovieDetails(String(review.movieId))

  return mapHeroData(movie, review)
}
