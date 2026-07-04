import { useNavigate } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'

function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="
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
