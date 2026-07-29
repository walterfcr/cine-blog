interface PrioritySelectorProps {
  value: number
  onChange: (value: number) => void
}

const options = [
  {
    value: 1,
    label: '🟢 Baja',
  },
  {
    value: 2,
    label: '🟡 Media',
  },
  {
    value: 3,
    label: '🟠 Alta',
  },
  {
    value: 4,
    label: '🔴 Muy alta',
  },
  {
    value: 5,
    label: '⭐ Máxima',
  },
]

function PrioritySelector({ value, onChange }: PrioritySelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`
            rounded-full
            border
            px-4
            py-2
            text-sm
            font-medium
            transition-all

            ${
              value === option.value
                ? 'border-accent bg-accent text-white'
                : 'border-border bg-surface hover:border-accent'
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default PrioritySelector
