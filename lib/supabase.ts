import { createClient } from '@supabase/supabase-js'

// Support both NEXT_PUBLIC_ and VITE_ prefixed environment variables
const supabaseUrl = 
  process.env.NEXT_PUBLIC_SUPABASE_URL || 
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_DEV_SUPABASE_URL

const supabaseAnonKey = 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY

let supabase: ReturnType<typeof createClient> | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export const getSupabaseClient = () => {
  if (!supabase) {
    console.error('Supabase client not initialized. URL:', supabaseUrl, 'Key:', supabaseAnonKey ? 'set' : 'missing')
    throw new Error('Supabase client not initialized. Check your environment variables.')
  }
  return supabase
}

// For backward compatibility, also export a default client (may be null during build)
export { supabase }
