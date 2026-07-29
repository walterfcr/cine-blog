import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'

import AdminReviewCard from '@/components/admin/AdminReviewCard'
import AdminWatchlistCard from '@/components/admin/AdminWatchlistCard'

import { deleteReview, getAllReviews } from '@/services/review.service'
import {
  deleteWatchlistMovie,
  getWatchlistMovies,
} from '@/services/watchlist.service'

import { reviewKeys } from '@/queries/queryKeys'

function Dashboard() {
  const queryClient = useQueryClient()

  const { data: reviews, isLoading } = useQuery({
    queryKey: reviewKeys.admin,
    queryFn: getAllReviews,
  })

  const { data: watchlist, isLoading: watchlistLoading } = useQuery({
    queryKey: ['admin-watchlist'],
    queryFn: getWatchlistMovies,
  })

  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewKeys.admin,
      })
    },
  })

  const deleteWatchlistMutation = useMutation({
    mutationFn: deleteWatchlistMovie,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['admin-watchlist'],
      })
    },
  })

  if (isLoading || watchlistLoading) {
    return <Spinner />
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-text-secondary">
          Bienvenida al panel de administración.
        </p>
      </div>

      <div className="flex gap-4">
        <Link to="/admin/reviews/new">
          <Button>Nueva reseña</Button>
        </Link>

        <Link to="/admin/watchlist/new">
          <Button variant="secondary">Película que quiero ver</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Reseñas</p>

          <h2 className="mt-2 text-3xl font-bold">{reviews?.length ?? 0}</h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Publicadas</p>

          <h2 className="mt-2 text-3xl font-bold">
            {reviews?.filter((r) => r.published).length ?? 0}
          </h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Borradores</p>

          <h2 className="mt-2 text-3xl font-bold">
            {reviews?.filter((r) => !r.published).length ?? 0}
          </h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Destacada</p>

          <h2 className="mt-2 text-3xl font-bold">
            {reviews?.find((r) => r.featured)?.title ?? '—'}
          </h2>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Últimas reseñas</h2>

        <div className="space-y-4">
          {reviews?.map((review) => (
            <AdminReviewCard
              key={review.id}
              review={review}
              onDelete={(id) => {
                if (!confirm('¿Eliminar esta reseña?')) {
                  return
                }

                deleteReviewMutation.mutate(id)
              }}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Próximas reseñas</h2>

        <div className="space-y-4">
          {watchlist?.length ? (
            watchlist.map((movie) => (
              <AdminWatchlistCard
                key={movie.id}
                movie={movie}
                onDelete={(id) => {
                  if (!confirm('¿Eliminar esta película?')) {
                    return
                  }

                  deleteWatchlistMutation.mutate(id)
                }}
              />
            ))
          ) : (
            <p className="text-text-muted">No hay películas en la lista.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
