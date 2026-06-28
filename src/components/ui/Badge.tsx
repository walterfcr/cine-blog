import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent'
}

function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-surface text-text-secondary border-border',
    accent: 'bg-accent text-text-primary',
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
