export interface TmdbGenre {
  id: number
  name: string
}

export interface TmdbProductionCountry {
  iso_3166_1: string
  name: string
}

export interface TmdbProductionCompany {
  id: number
  name: string
  logo_path: string | null
  origin_country: string
}

export interface TmdbMovieDetails {
  id: number

  title: string
  original_title: string

  poster_path: string | null
  backdrop_path: string | null

  overview: string

  release_date: string

  vote_average: number
  vote_count: number

  runtime: number | null

  genres: TmdbGenre[]

  original_language: string

  production_countries: TmdbProductionCountry[]

  production_companies: TmdbProductionCompany[]
}
