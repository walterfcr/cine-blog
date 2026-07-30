import { NavLink } from 'react-router-dom'

import Container from '@/components/ui/Container'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

const links = [
  {
    to: '/',
    label: 'Inicio',
  },
  {
    to: '/movies',
    label: 'Películas',
  },
  {
    to: '/reviews',
    label: 'Reseñas',
  },
  {
    to: '/about',
    label: 'Acerca de',
  },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-semibold tracking-[0.2em] text-text-primary"
          >
            LOGO
          </NavLink>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }
              >
                {link.label}
              </NavLink>
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
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-lg font-medium text-accent'
                      : 'text-lg font-medium text-text-secondary hover:text-text-primary'
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
