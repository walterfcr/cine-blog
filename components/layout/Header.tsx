'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

import Container from '@/components/ui/Container'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useTheme } from '@/lib/contexts/theme-context'

const links = [
  {
    href: '/',
    label: 'Inicio',
  },
  {
    href: '/reviews',
    label: 'Reseñas',
  },
  {
    href: '/movies',
    label: 'Películas',
  },
  {
    href: '/about',
    label: 'Acerca de',
  },
]

function Header() {
  const { theme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }

    return pathname.startsWith(href)
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="shrink-0 transition-opacity duration-200 hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={theme === 'dark' ? '/logo-d.webp' : '/logo-l.webp'}
              alt="Butaca 24"
              className="h-8 w-auto md:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = isActive(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    group
                    relative
                    py-2
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      active
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }
                  `}
                >
                  {link.label}

                  <span
                    className={`
                      absolute
                      -bottom-1
                      left-0
                      h-0.5
                      bg-accent
                      transition-all
                      duration-300
                      ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </Link>
              )
            })}

            <div className="ml-2 border-l border-border pl-6">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-border
                text-xl
                text-text-primary
                transition-colors
                duration-200
                hover:border-accent
                hover:text-accent
              "
            >
              {menuOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            md:hidden
            ${menuOpen ? 'max-h-96 pb-6' : 'max-h-0'}
          `}
        >
          <nav className="border-t border-border pt-5">
            <div className="flex flex-col">
              {links.map((link) => {
                const active = isActive(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      relative
                      flex
                      items-center
                      border-b
                      border-border/60
                      py-4
                      text-base
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        active
                          ? 'pl-3 text-text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute
                        left-0
                        h-5
                        w-0.5
                        bg-accent
                        transition-opacity
                        duration-200
                        ${active ? 'opacity-100' : 'opacity-0'}
                      `}
                    />

                    {link.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
