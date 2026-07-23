import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from '@/contexts/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        flex
        h-11
        w-36
        items-center
        rounded-full
        border
        border-border
        bg-surface
        p-1
        transition-colors
      "
    >
      <div
        className={`
          absolute
          top-1
          h-9
          w-[66px]
          rounded-full
          bg-accent
          transition-transform
          duration-300
          ${theme === 'light' ? 'translate-x-[60px]' : 'translate-x-0'}
        `}
      />

      <div className="relative z-10 flex flex-1 items-center justify-center gap-1">
        <LuMoon size={16} />
        <span className="text-xs font-medium">Cine</span>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center gap-1">
        <LuSun size={16} />
        <span className="text-xs font-medium">Revista</span>
      </div>
    </button>
  )
}

export default ThemeToggle
