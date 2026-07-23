import type { Movie } from '@/types/Movie'
import type { TmdbMovie } from '@/types/TmdbMovie'
import { getImageUrl } from '@/utils/image'

export function mapMovie(movie: TmdbMovie): Movie {
  return {
    id: movie.id,

    title: movie.title,

    poster: getImageUrl(movie.poster_path, 'w500'),

    backdrop: getImageUrl(movie.backdrop_path, 'original'),

    posterPath: movie.poster_path,

    backdropPath: movie.backdrop_path,

    overview: movie.overview,

    year: movie.release_date ? Number(movie.release_date.slice(0, 4)) : 0,

    tmdbRating: movie.vote_average,
  }
}
