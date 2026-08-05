import type { Metadata } from 'next'
import { Inter, Atkinson_Hyperlegible_Next } from 'next/font/google'

import './index.css'
import Providers from '@/components/providers'

const inter = Inter({
  variable: '--font-heading',
  subsets: ['latin'],
})

const atkinson = Atkinson_Hyperlegible_Next({
  variable: '--font-body',
  subsets: ['latin'],
  adjustFontFallback: false,
})

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
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${atkinson.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
