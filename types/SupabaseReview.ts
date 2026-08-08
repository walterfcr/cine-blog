export interface SupabaseReview {
  id: string

  movie_id: number
  movie_title: string

  title: string
  excerpt: string
  content: string

  rating: number

  poster_path: string | null
  backdrop_path: string | null

  published: boolean
  featured: boolean

  created_at: string
  updated_at: string

  author_id: string | null

  profiles?: {
    name: string
    avatar_url: string | null
  } | null
}
