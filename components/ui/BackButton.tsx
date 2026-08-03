'use client'

import { useRouter } from 'next/navigation'
import { LuArrowLeft } from 'react-icons/lu'

function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(-1)}
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
