import type { TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`
        w-full
        rounded-lg
        border
        border-border
        bg-surface
        px-4
        py-3
        text-text-primary
        placeholder:text-text-muted
        outline-none
        transition-colors
        focus:border-accent
        resize-y
        ${className}
      `}
    />
  )
}

export default Textarea
