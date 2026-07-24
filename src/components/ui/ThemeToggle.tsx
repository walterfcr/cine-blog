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
        w-38
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
          left-1
          h-9
          w-1/2
          rounded-full
          bg-accent
          transition-transform
          duration-300
          ${theme === 'light' ? 'translate-x-full' : 'translate-x-0'}
        `}
      />

      <div
        className={`
    relative
    z-10
    flex
    flex-1
    items-center
    justify-center
    gap-1
    transition-colors
    duration-300
    ${theme === 'dark' ? 'text-white' : 'text-text-muted'}
  `}
      >
        <LuMoon size={16} />
        <span className="text-xs font-medium">Cinema</span>
      </div>

      <div
        className={`
    relative
    z-10
    flex
    flex-1
    items-center
    justify-center
    gap-1
    transition-colors
    duration-300
    ${theme === 'light' ? 'text-white' : 'text-text-muted'}
  `}
      >
        <LuSun size={16} />
        <span className="text-xs font-medium">Revista</span>
      </div>
    </button>
  )
}

export default ThemeToggle
