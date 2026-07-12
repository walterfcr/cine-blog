interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}

function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-text-primary">{label}</span>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`
        relative
        h-6
        w-11
        rounded-full
        transition-colors
        duration-200
        ${checked ? 'bg-accent' : 'bg-border'}
      `}
      >
        <span
          className={`
          absolute
          left-0.5
          top-0.5
          h-5
          w-5
          rounded-full
          bg-white
          shadow-sm
          transition-transform
          duration-200
          ${checked ? 'translate-x-5' : 'translate-x-0'}
        `}
        />
      </button>
    </div>
  )
}

export default ToggleSwitch
