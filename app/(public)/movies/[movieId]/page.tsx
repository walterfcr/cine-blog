import MovieDetail from '@/components/pages/MovieDetail'

interface MovieDetailPageProps {
  params: Promise<{
    movieId: string
  }>
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { movieId } = await params

  return <MovieDetail movieId={movieId} />
}
