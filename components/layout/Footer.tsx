'use client'

import { useState } from 'react'
import { useTheme } from '@/lib/contexts/theme-context'

function Footer() {
  const year = new Date().getFullYear()
  const { theme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div onClick={() => setMenuOpen(false)}>
              <img
                src={theme === 'dark' ? '/logo-d.webp' : '/logo-l.webp'}
                alt="Butaca 24"
                className="h-8 w-auto md:h-10"
              />
            </div>

            <p className="mt-3 leading-7 text-text-secondary">
              Un espacio para hablar de cine, compartir opiniones y descubrir
              historias que merecen ser recordadas.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 text-sm">
            <span className="mb-1 font-semibold uppercase tracking-[0.2em] text-text-muted">
              Explorar
            </span>

            <a
              href="/"
              className="text-text-secondary transition-colors hover:text-accent"
            >
              Inicio
            </a>

            <a
              href="/reviews"
              className="text-text-secondary transition-colors hover:text-accent"
            >
              Reseñas
            </a>

            <a
              href="/movies"
              className="text-text-secondary transition-colors hover:text-accent"
            >
              Películas
            </a>

            <a
              href="/about"
              className="text-text-secondary transition-colors hover:text-accent"
            >
              Acerca de
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Butaca 24</p>

          <p>El cine se vive más allá de la pantalla.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
