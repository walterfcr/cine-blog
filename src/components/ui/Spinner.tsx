function Spinner() {
  return (
    <div
      className="
        h-8
        w-8
        animate-spin
        rounded-full
        border-4
        border-border
        border-t-accent
      "
      role="status"
      aria-label="Cargando"
    />
  )
}

export default Spinner
