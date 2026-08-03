import type { WatchlistMovie } from '@/types/WatchlistMovie'
import type { SupabaseWatchlist } from '@/types/SupabaseWatchlist'

export function mapWatchlistMovie(movie: SupabaseWatchlist): WatchlistMovie {
  return {
    id: movie.id,

    movieId: movie.movie_id,

    title: movie.title,

    posterPath: movie.poster_path,

    backdropPath: movie.backdrop_path,

    year: movie.year,

    tmdbRating: movie.tmdb_rating,

    notes: movie.notes ?? '',

    priority: movie.priority,

    createdAt: movie.created_at,
  }
}
