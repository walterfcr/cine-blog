interface StarRatingProps {
  value: number
  onChange: (rating: number) => void
}

function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 10 }, (_, index) => {
        const star = index + 1

        return (
          <button key={star} type="button" onClick={() => onChange(star)}>
            {star <= value ? '★' : '☆'}
          </button>
        )
      })}
    </div>
  )
}

export default StarRating
