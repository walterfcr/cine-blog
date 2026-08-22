import { getSupabaseClient } from '@/lib/supabase'
import { mapSupabaseReview } from '@/lib/mappers/supabase-review.mapper'
import type { CreateReviewInput, Review } from '@/types/Review'

const reviewSelect = `
  *,
  profiles (
    name,
    avatar_url
  )
`

export async function getReviews() {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(reviewSelect)
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data.map(mapSupabaseReview)
}

export async function getReview(id: string) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(reviewSelect)
    .eq('id', id)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data ? mapSupabaseReview(data) : null
}

export async function getAllReviews() {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(
      `
      *,
      profiles (
        name,
        avatar_url
      )
    `,
    )
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data.map(mapSupabaseReview)
}

export async function getFeaturedReviews() {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(reviewSelect)
    .eq('published', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(5)

  if (error) {
    throw error
  }

  return data.map(mapSupabaseReview)
}

export async function createReview(review: CreateReviewInput) {
  const supabase = getSupabaseClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError) {
    throw userError
  }

  if (!user) {
    throw new Error('No hay un usuario autenticado')
  }

  const { error } = await supabase.from('reviews').insert([
    {
      movie_id: review.movieId,
      movie_title: review.movieTitle,
      title: review.title,
      excerpt: review.excerpt,
      content: review.content,
      rating: review.rating,
      poster_path: review.posterPath,
      backdrop_path: review.backdropPath,
      featured: review.featured,
      published: review.published,
      author_id: user.id,
    },
  ])

  if (error) {
    throw error
  }
}

export async function deleteReview(id: string) {
  const supabase = getSupabaseClient()

  const { error } = await supabase.from('reviews').delete().eq('id', id)

  if (error) {
    throw error
  }
}

export async function updateReview(
  id: string,
  review: {
    movieId: number
    title: string
    excerpt: string
    content: string
    rating: number
    posterPath: string | null
    backdropPath: string | null
    featured: boolean
    published: boolean
  },
) {
  const supabase = getSupabaseClient()

  const { error } = await supabase
    .from('reviews')
    .update({
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
    .eq('id', id)

  if (error) {
    throw error
  }
}

export async function getReviewByMovie(movieId: number) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('reviews')
    .select(reviewSelect)
    .eq('movie_id', movieId)
    .eq('published', true)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data ? mapSupabaseReview(data) : null
}
