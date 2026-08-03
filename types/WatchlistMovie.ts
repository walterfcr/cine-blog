export interface WatchlistMovie {
  id: string

  movieId: number

  title: string

  posterPath: string | null

  backdropPath: string | null

  year: number

  tmdbRating: number

  notes: string

  priority: number

  createdAt: string
}
