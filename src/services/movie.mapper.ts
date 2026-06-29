import type { Movie } from '@/types/Movie'
import type { TmdbMovie } from '@/types/TmdbMovie'

export function mapMovie(movie: TmdbMovie): Movie {
  return {
    id: movie.id,

    title: movie.title,

    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '',

    backdrop: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : '',

    overview: movie.overview,

    year: movie.release_date ? Number(movie.release_date.slice(0, 4)) : 0,

    tmdbRating: movie.vote_average,
  }
}
