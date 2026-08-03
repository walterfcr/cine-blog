export interface Movie {
  id: number

  title: string

  poster: string
  backdrop: string

  posterPath: string | null
  backdropPath: string | null

  overview: string

  year: number

  tmdbRating: number
}
