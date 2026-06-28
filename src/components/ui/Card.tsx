import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return (
    <article
      className="
        rounded-xl
        border
        border-border
        bg-surface
        hover:border-surface-hover
        overflow-hidden
        transition-all
        duration-300
        
      "
    >
      {children}
    </article>
  )
}

export default Card
