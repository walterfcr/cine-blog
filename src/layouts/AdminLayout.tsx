import { Outlet } from 'react-router-dom'

import Button from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'

function AdminLayout() {
  const { user, logout } = useAuth()

  async function handleLogout() {
    await logout()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold">Cine Blog Admin</h1>

            <p className="text-sm text-text-muted">{user?.email}</p>
          </div>

          <Button variant="secondary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
