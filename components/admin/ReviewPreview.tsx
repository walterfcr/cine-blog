import type { Movie } from '@/types/Movie'
import type { Review } from '@/types/Review'

import ReviewArticle from '@/components/review/ReviewArticle'

interface ReviewPreviewProps {
  movie: Movie
  title: string
  excerpt: string
  content: string
  rating: number
  posterPath: string | null
  backdropPath: string | null
}

function ReviewPreview({
  movie,
  title,
  excerpt,
  content,
  rating,
  posterPath,
  backdropPath,
}: ReviewPreviewProps) {
  const review: Review = {
    id: 'preview',
    movieId: movie.id,
    movieTitle: movie.title,
    title,
    excerpt,
    content,
    rating,
    posterPath,
    backdropPath,
    createdAt: new Date().toISOString(),
    published: false,
    featured: false,
    authorId: null,
    authorName: null,
    authorAvatarUrl: null,
  }

  return <ReviewArticle review={review} movie={movie} preview />
}

export default ReviewPreview
