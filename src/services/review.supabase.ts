import { supabase } from '@/lib/supabase'
import { mapSupabaseReview } from '@/services/supabase-review.mapper'

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
    .single()

  if (error) {
    throw error
  }

  return mapSupabaseReview(data)
}

export async function getFeaturedReview() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .single()

  if (error) {
    throw error
  }

  return mapSupabaseReview(data)
}

export async function createReview(review: {
  movieId: number
  title: string
  excerpt: string
  content: string
  rating: number
  posterPath: string | null
  backdropPath: string | null
  featured: boolean
  published: boolean
}) {
  const { error } = await supabase.from('reviews').insert(review)

  if (error) {
    throw error
  }
}
