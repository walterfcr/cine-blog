import type { Movie } from '@/types/Movie'

export interface MovieDetails extends Movie {
  originalTitle: string

  runtime: number | null

  genres: string[]

  originalLanguage: string

  productionCountries: string[]

  productionCompanies: string[]
}
