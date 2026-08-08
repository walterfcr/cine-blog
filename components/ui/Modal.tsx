import type { ReactNode } from 'react'
import Button from '@/components/ui/Button'

interface ModalProps {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
  size?: 'sm' | 'lg'
}

function Modal({ open, title, children, onClose, size = 'lg' }: ModalProps) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div
        className={`
          flex
          w-full
          ${size === 'sm' ? 'max-w-md' : 'max-w-4xl'}
          max-h-[90vh]
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-surface
          shadow-xl
        `}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-xl font-semibold text-text-primary">{title}</h2>

          <Button variant="ghost" onClick={onClose}>
            ✕
          </Button>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal
