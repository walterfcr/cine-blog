import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { getSession, signIn, signOut } from '@/services/auth.supabase'

export function useAuth() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSession().then((session) => {
      setSession(session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function login(email: string, password: string) {
    await signIn(email, password)
  }

  async function logout() {
    await signOut()
  }

  return {
    session,
    loading,
    user: session?.user,
    isAuthenticated: !!session,

    login,
    logout,
  }
}
