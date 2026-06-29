import { NavLink } from 'react-router-dom'

import Container from '@/components/ui/Container'

function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-wide text-text-primary"
          >
            LOGO
          </NavLink>

          <nav className="flex items-center gap-8">
            <NavLink to="/">Inicio</NavLink>

            <NavLink to="/movies">Películas</NavLink>

            <NavLink to="/reviews">Reseñas</NavLink>

            <NavLink to="/about">Acerca de</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
