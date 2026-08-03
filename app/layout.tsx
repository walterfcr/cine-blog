import type { Metadata } from 'next'
import './index.css'
import Providers from '@/components/providers'

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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
