import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
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
      'border border-border bg-surface text-text-primary hover:bg-surface-hover',

    ghost: 'text-text-secondary hover:text-text-primary',

    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      className={`
      inline-flex
      items-center
      justify-center
      gap-2
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
