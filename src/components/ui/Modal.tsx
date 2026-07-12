import type { ReactNode } from 'react'
import Button from '@/components/ui/Button'

interface ModalProps {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) {
    return null
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        p-6
      "
    >
      <div
        className="
          flex
          max-h-[90vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-background
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-border
            p-6
          "
        >
          <h2 className="text-2xl font-semibold">{title}</h2>

          <Button variant="ghost" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal
