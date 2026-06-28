import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b border-zinc-800">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">LOGO</h1>

        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li>
            <NavLink to="/reviews">Reseñas</NavLink>
          </li>

          <li>
            <NavLink to="/movies">Películas</NavLink>
          </li>

          <li>
            <NavLink to="/about">Acerca de</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
