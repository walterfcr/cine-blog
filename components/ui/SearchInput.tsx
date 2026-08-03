import { LuSearch } from 'react-icons/lu'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function SearchInput({ className = '', ...props }: SearchInputProps) {
  return (
    <div className="relative">
      <LuSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-text-muted
        "
        size={18}
      />

      <input
        {...props}
        className={`
          h-12
          w-full
          rounded-xl
          border
          border-border
          bg-surface
          pl-11
          pr-4
          text-text-primary
          placeholder:text-text-muted
          transition-colors
          focus:border-accent
          focus:outline-none
          ${className}
        `}
      />
    </div>
  )
}

export default SearchInput
