import { NavLink } from 'react-router-dom'

import Container from '@/components/ui/Container'

function Header() {
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

          <nav className="flex items-center gap-8 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }
            >
              Películas
            </NavLink>

            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }
            >
              Reseñas
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }
            >
              Acerca de
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
