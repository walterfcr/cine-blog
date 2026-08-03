import { redirect } from 'next/navigation'
import Spinner from '@/components/ui/Spinner'
import { useAuth } from '@/lib/hooks/use-auth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return <Spinner />
  }

  if (!isAuthenticated) {
    return <Navigate href="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
