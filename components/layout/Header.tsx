'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import { useTheme } from '@/lib/contexts/theme-context'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

const links = [
  {
    href: '/',
    label: 'Inicio',
  },
  {
    href: '/movies',
    label: 'Películas',
  },
  {
    href: '/reviews',
    label: 'Reseñas',
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
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src={theme === 'dark' ? '/logo-d.webp' : '/logo-l.webp'}
              alt="Butaca 24"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-text-primary cursor-pointer"
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
          md:hidden
          ${menuOpen ? 'max-h-80 py-6' : 'max-h-0 py-0'}
        `}
        >
          <nav className="border-t border-border">
            <div className="flex flex-col gap-5 pt-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive(link.href)
                      ? 'text-lg font-medium text-accent'
                      : 'text-lg font-medium text-text-secondary hover:text-text-primary'
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
