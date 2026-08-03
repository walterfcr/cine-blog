import { supabase } from '@/lib/supabase'
import { mapWatchlistMovie } from '@/lib/mappers/watchlist.mapper'
import type { WatchlistMovie } from '@/types/WatchlistMovie'

export async function getWatchlistMovies() {
  const { data, error } = await supabase
    .from('watchlist')
    .select('*')
    .order('priority', { ascending: true })

  if (error) {
    throw error
  }

  return data.map(mapWatchlistMovie)
}

export async function createWatchlistMovie(
  movie: Omit<WatchlistMovie, 'id' | 'createdAt'>,
) {
  const { error } = await supabase.from('watchlist').insert({
    movie_id: movie.movieId,
    title: movie.title,
    poster_path: movie.posterPath,
    backdrop_path: movie.backdropPath,
    year: movie.year,
    tmdb_rating: movie.tmdbRating,
    notes: movie.notes,
    priority: movie.priority,
  })

  if (error) {
    throw error
  }
}

export async function deleteWatchlistMovie(id: string) {
  const { error } = await supabase.from('watchlist').delete().eq('id', id)

  if (error) {
    throw error
  }
}
