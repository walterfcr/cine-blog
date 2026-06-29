import type { Movie } from './Movie'

export interface ReviewCardData {
  id: string
  title: string
  excerpt: string
  content: string
  rating: number
  author: string
  createdAt: string
  movie: Movie
}
