import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`
        rounded-xl
        border
        border-border
        bg-surface
        overflow-hidden
        transition-all
        duration-300
        hover:border-surface-hover
        ${className}
      `}
    >
      {children}
    </article>
  )
}

export default Card
