import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  children: ReactNode
}

function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="font-medium text-text-primary">{label}</label>

      {children}
    </div>
  )
}

export default FormField
