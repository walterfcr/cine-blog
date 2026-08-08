'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'
import Modal from '@/components/ui/Modal'

import AdminReviewCard from '@/components/admin/AdminReviewCard'
import AdminWatchlistCard from '@/components/admin/AdminWatchlistCard'

import { deleteReview, getAllReviews } from '@/lib/services/review'
import {
  deleteWatchlistMovie,
  getWatchlistMovies,
} from '@/lib/services/watchlist'

import { reviewKeys } from '@/lib/queries/query-keys'

function Dashboard() {
  const queryClient = useQueryClient()

  const [reviewToDelete, setReviewToDelete] = useState<string | null>(null)

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

      setReviewToDelete(null)
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
    <>
      <Modal
        open={!!reviewToDelete}
        title="Eliminar reseña"
        onClose={() => setReviewToDelete(null)}
        size="sm"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-text-primary">
              ¿Estás segura de que quieres eliminar esta reseña?
            </h3>

            <p className="mt-2 text-text-secondary">
              Esta acción no se puede deshacer.
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setReviewToDelete(null)}>
              Cancelar
            </Button>

            <Button
              onClick={() => {
                if (!reviewToDelete) return

                deleteReviewMutation.mutate(reviewToDelete)
              }}
              disabled={deleteReviewMutation.isPending}
            >
              {deleteReviewMutation.isPending
                ? 'Eliminando...'
                : 'Eliminar reseña'}
            </Button>
          </div>
        </div>
      </Modal>

      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-text-secondary">
          Bienvenida al panel de administración.
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/admin/reviews/new">
          <Button>Nueva reseña</Button>
        </Link>

        <Link href="/admin/watchlist/new">
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
            {reviews?.filter((r: any) => r.published).length ?? 0}
          </h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Borradores</p>

          <h2 className="mt-2 text-3xl font-bold">
            {reviews?.filter((r: any) => !r.published).length ?? 0}
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
                setReviewToDelete(id)
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
    </>
  )
}

export default Dashboard
