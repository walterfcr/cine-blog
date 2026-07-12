import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-xl font-bold">Cine Blog Admin</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
