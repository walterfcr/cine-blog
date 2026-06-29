import { Outlet } from 'react-router-dom'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
