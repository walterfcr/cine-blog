'use client'

import { LuArrowLeft } from 'react-icons/lu'

function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="
        inter-text
        mb-8
        inline-flex
        items-center
        gap-2
        text-text-secondary
        transition-colors
        hover:text-text-primary
      "
    >
      <LuArrowLeft />

      <span>Volver</span>
    </button>
  )
}

export default BackButton
