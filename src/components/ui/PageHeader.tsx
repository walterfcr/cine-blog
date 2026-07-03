interface PageHeaderProps {
  title: string
  subtitle?: string
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="space-y-3">
      <h1 className="text-5xl font-bold tracking-tight">{title}</h1>

      {subtitle && (
        <p className="max-w-3xl text-text-secondary leading-8">{subtitle}</p>
      )}
    </header>
  )
}

export default PageHeader
