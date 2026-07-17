import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'success' | 'warning'
}

function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'border-border bg-surface text-text-secondary',

    accent: 'bg-accent text-white',

    success: 'border-green-500/20 bg-green-500/10 text-green-400',

    warning: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-sm
        font-medium
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  )
}

export default Badge
