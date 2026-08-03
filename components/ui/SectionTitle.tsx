import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`
        mb-8
        text-3xl
        font-bold
        tracking-tight
        text-text-primary
        ${className}
      `}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
