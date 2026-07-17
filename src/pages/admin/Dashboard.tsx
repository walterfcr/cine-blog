import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'
import AdminReviewCard from '@/components/admin/AdminReviewCard'

import { getAllReviews } from '@/services/review.supabase'

function Dashboard() {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['admin-reviews'],
    queryFn: getAllReviews,
  })

  if (isLoading) {
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

      <Link
        to="/admin/reviews/new"
        className="
          rounded-lg
          bg-accent
          px-5
          py-3
          font-medium
          text-white
          transition-colors
          hover:bg-accent-hover
        "
      >
        <Button>Nueva reseña</Button>
      </Link>

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
                console.log('Delete', id)
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
