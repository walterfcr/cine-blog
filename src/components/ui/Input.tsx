import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-lg
        border
        border-border
        bg-surface
        px-4
        py-3
        text-text-primary
        placeholder:text-text-muted
        outline-none
        transition-colors
        focus:border-accent
        ${className}
      `}
    />
  )
}

export default Input
