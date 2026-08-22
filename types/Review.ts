export interface ReviewAuthor {
  name: string
  avatarUrl: string | null
}

export interface Review {
  id: string

  movieId: number
  movieTitle: string

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

  authorId: string | null
  authorName: string | null
  authorAvatarUrl: string | null
}

export interface CreateReviewInput {
  movieId: number
  movieTitle: string
  title: string
  excerpt: string
  content: string
  rating: number
  posterPath: string | null
  backdropPath: string | null
  published: boolean
  featured: boolean
}
