export interface Review {
  id: string
  movieId: number
  title: string
  excerpt: string
  content: string
  rating: number
  author: string
  createdAt: string
  updatedAt?: string
  published: boolean
}
