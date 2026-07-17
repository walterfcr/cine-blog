import { supabase } from '@/lib/supabase'
import { mapSupabaseReview } from '@/services/supabase-review.mapper'
import type { Review } from '@/types/Review'

export async function getReviews() {
  const { data, error } = await supabase.from('reviews').select('*')

  if (error) {
    throw error
  }

  return data.map(mapSupabaseReview)
}

export async function getReview(id: string) {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (error) {
    throw error
  }

  return mapSupabaseReview(data)
}

export async function getAllReviews() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data.map(mapSupabaseReview)
}

export async function getFeaturedReview() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .maybeSingle()

  if (error) {
    throw error
  }

  return mapSupabaseReview(data)
}

export async function createReview(
  review: Omit<Review, 'id' | 'createdAt' | 'updatedAt'>,
) {
  const { error } = await supabase.from('reviews').insert({
    movie_id: review.movieId,

    title: review.title,

    excerpt: review.excerpt,

    content: review.content,

    rating: review.rating,

    poster_path: review.posterPath,

    backdrop_path: review.backdropPath,

    featured: review.featured,

    published: review.published,
  })

  if (error) {
    throw error
  }
}
