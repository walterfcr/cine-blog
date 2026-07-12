import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

function Dashboard() {
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

          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Publicadas</p>

          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Borradores</p>

          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-text-muted">Destacada</p>

          <h2 className="mt-2 text-3xl font-bold">★</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
