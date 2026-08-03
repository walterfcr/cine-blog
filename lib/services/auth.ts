import { getSupabaseClient } from '@/lib/supabase'

export async function signIn(email: string, password: string) {
  const supabase = getSupabaseClient()
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }
}

export async function signOut() {
  const supabase = getSupabaseClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

export async function getSession() {
  const supabase = getSupabaseClient()
  const { data } = await supabase.auth.getSession()

  return data.session
}
