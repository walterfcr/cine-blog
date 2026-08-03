import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-8 py-14">
      <h2 className="text-3xl font-bold">{title}</h2>

      {children}
    </section>
  )
}

export default Section
