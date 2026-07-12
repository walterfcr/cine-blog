import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary:
      'bg-surface text-text-primary border border-border hover:bg-surface-hover',
    ghost: 'text-text-secondary hover:text-text-primary',
  }

  return (
    <button
      className={`
        rounded-lg
        px-5
        py-2.5
        font-medium
        transition
        duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
