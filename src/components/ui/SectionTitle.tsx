import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
}

function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="mb-8 text-3xl font-bold tracking-tight">{children}</h2>
}

export default SectionTitle
