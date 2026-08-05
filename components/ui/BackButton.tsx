'use client'

import { LuArrowLeft } from 'react-icons/lu'

interface BackButtonProps {
  variant?: 'default' | 'overlay'
}

function BackButton({ variant = 'default' }: BackButtonProps) {
  return (
    <button
      onClick={() => window.history.back()}
      className={`
        inter-text
        mb-8
        inline-flex
        cursor-pointer
        items-center
        gap-2
        transition-colors
        ${
          variant === 'overlay'
            ? 'text-white/80 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
            : 'text-text-secondary hover:text-text-primary'
        }
      `}
    >
      <LuArrowLeft />

      <span>Volver</span>
    </button>
  )
}

export default BackButton
