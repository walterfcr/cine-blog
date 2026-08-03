'use client'

import { useMemo } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '@/lib/contexts/theme-context'

export default function Providers({ children }: { children: React.ReactNode }) {
  // Create QueryClient instance once and reuse it
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
    []
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
