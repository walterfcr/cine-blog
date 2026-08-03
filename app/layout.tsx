import type { Metadata } from 'next'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { ThemeProvider } from '@/lib/contexts/theme-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cine Blog',
  description: 'A modern movie review and watchlist platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
