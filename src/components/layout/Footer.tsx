function Footer() {
  return (
    <footer className="bg-black text-zinc-500 text-center py-6 border-t border-zinc-800 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Cine Blog — Made with React
      </p>
    </footer>
  )
}

export default Footer
