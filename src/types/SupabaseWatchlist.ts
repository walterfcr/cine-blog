export interface SupabaseWatchlist {
  id: string

  movie_id: number

  title: string

  poster_path: string | null

  backdrop_path: string | null

  year: number

  tmdb_rating: number

  notes: string | null

  priority: number

  created_at: string
}
