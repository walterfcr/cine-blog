import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

let supabase: ReturnType<typeof createClient> | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else if (typeof window === 'undefined') {
  // Server-side: only throw if absolutely necessary
  console.warn('Supabase environment variables not configured. Some features may not work.')
} else {
  // Client-side: will be needed for auth operations
  throw new Error('Missing Supabase environment variables')
}

export const getSupabaseClient = () => {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Check your environment variables.')
  }
  return supabase
}

// For backward compatibility, also export a default client (may be null during build)
export { supabase }
