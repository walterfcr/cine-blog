import type { Review } from '@/types/Review'
import type { SupabaseReview } from '@/types/SupabaseReview'

export function mapSupabaseReview(review: SupabaseReview): Review {
  return {
    id: review.id,

    movieId: review.movie_id,

    title: review.title,

    excerpt: review.excerpt,

    content: review.content,

    rating: review.rating,

    author: 'Admin',

    createdAt: review.created_at,

    updatedAt: review.updated_at,

    published: review.published,

    featured: review.featured,
  }
}
