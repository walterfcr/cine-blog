interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          rounded-lg
          border
          border-border
          px-4
          py-2
          text-sm
          transition
          disabled:cursor-not-allowed
          disabled:opacity-40
          hover:border-accent
        "
      >
        ← Anterior
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              h-10
              w-10
              rounded-lg
              border
              transition

              ${
                currentPage === page
                  ? 'border-accent bg-accent text-white'
                  : 'border-border hover:border-accent'
              }
            `}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          rounded-lg
          border
          border-border
          px-4
          py-2
          text-sm
          transition
          disabled:cursor-not-allowed
          disabled:opacity-40
          hover:border-accent
        "
      >
        Siguiente →
      </button>
    </div>
  )
}

export default Pagination
