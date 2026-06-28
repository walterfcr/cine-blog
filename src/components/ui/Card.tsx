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
        border-zinc-800
        bg-zinc-900
        overflow-hidden
        transition-all
        duration-300
        hover:border-zinc-700
      "
    >
      {children}
    </article>
  )
}

export default Card
