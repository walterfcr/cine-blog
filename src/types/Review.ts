export interface Review {
  id: string

  movieId: number

  title: string
  excerpt: string
  content: string

  rating: number

  posterPath: string | null
  backdropPath: string | null

  createdAt: string
  updatedAt?: string

  published: boolean
  featured: boolean
}
