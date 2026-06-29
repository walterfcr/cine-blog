function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-6 text-center text-text-muted mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Cine Blog — Made with React
      </p>
    </footer>
  )
}

export default Footer
