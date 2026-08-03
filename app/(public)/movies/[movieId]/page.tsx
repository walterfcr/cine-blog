'use client'

import { useParams } from 'next/navigation'
import MovieDetail from '@/components/pages/MovieDetail'

export default function MovieDetailPage() {
  const params = useParams()
  const movieId = params?.movieId as string

  return <MovieDetail movieId={movieId} />
}
