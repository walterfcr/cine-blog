'use client'

import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from '@/lib/contexts/theme-context'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        flex
        h-9
        w-32
        items-center
        rounded-full
        border
        border-border
        bg-surface
        p-1
        transition-colors
        md:h-11
        md:w-38
      "
    >
      <div
        className={`
          absolute
          left-1
          top-1
          h-7
          w-1/2
          rounded-full
          bg-accent
          transition-transform
          duration-300
          md:h-9
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
          text-xs
          transition-colors
          duration-300
          cursor-pointer
          md:text-sm
          ${theme === 'dark' ? 'text-white' : 'text-text-muted'}
        `}
      >
        <LuMoon />
        Cinema
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
          text-xs
          transition-colors
          duration-300
          cursor-pointer
          md:text-sm
          ${theme === 'light' ? 'text-white' : 'text-text-muted'}
        `}
      >
        <LuSun size={16} />
        <span className="inter-text text-xs font-medium">Revista</span>
      </div>
    </button>
  )
}

export default ThemeToggle
