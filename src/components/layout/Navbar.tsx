function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between border-b border-zinc-800">
      <h1 className="text-xl font-bold tracking-wide">🎬 Cine Blog</h1>

      <div className="flex gap-6 text-sm">
        <a className="hover:text-red-400 transition" href="/">
          Inicio
        </a>
        <a className="hover:text-red-400 transition" href="/reviews">
          Reseñas
        </a>
        <a className="hover:text-red-400 transition" href="/movies">
          Películas
        </a>
        <a className="hover:text-red-400 transition" href="/about">
          Acerca de
        </a>
      </div>
    </nav>
  )
}

export default Navbar
