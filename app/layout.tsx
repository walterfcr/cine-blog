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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    default: 'Butaca 24',
    template: '%s | Butaca 24',
  },
  description: 'Reseñas de cine, películas y recomendaciones desde Butaca 24.',
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
