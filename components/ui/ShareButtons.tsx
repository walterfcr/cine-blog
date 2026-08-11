'use client'

import { useState } from 'react'
import { LuCheck, LuCopy, LuFacebook, LuShare2 } from 'react-icons/lu'
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

interface ShareButtonsProps {
  title: string
}

function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  function getShareUrl() {
    return window.location.href
  }

  function shareOnFacebook() {
    const url = encodeURIComponent(getShareUrl())

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      '_blank',
      'width=600,height=500',
    )
  }

  function shareOnX() {
    const url = encodeURIComponent(getShareUrl())
    const text = encodeURIComponent(title)

    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      '_blank',
      'width=600,height=500',
    )
  }

  function shareOnWhatsApp() {
    const text = encodeURIComponent(`${title}\n\n${getShareUrl()}`)

    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getShareUrl())

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2500)
    } catch (error) {
      console.error('No se pudo copiar el enlace.', error)
    }
  }

  async function handleShare() {
    if (!navigator.share) {
      await copyLink()
      return
    }

    try {
      await navigator.share({
        title,
        text: `Lee esta reseña en Butaca 24: ${title}`,
        url: getShareUrl(),
      })
    } catch {
      // El usuario canceló el menú de compartir.
    }
  }

  const iconButtonClass = `
    inline-flex
    h-10
    w-10
    items-center
    justify-center
    rounded-lg
    border
    border-border
    text-text-secondary
    transition-colors
    duration-200
    cursor-pointer
    hover:border-accent
    hover:bg-surface-hover
    hover:text-accent
  `

  return (
    <section className="border-y border-border py-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
            Compartir reseña
          </p>

          <p className="mt-1 text-sm text-text-secondary">
            ¿Te gustó? Compártela con otros amantes del cine.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Compartir reseña"
            className="
              inline-flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-accent
              px-4
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-200
              cursor-pointer
              hover:bg-accent-hover
            "
          >
            <LuShare2 className="size-4" />
            <span className="hidden sm:inline">Compartir</span>
          </button>

          <button
            type="button"
            onClick={shareOnWhatsApp}
            aria-label="Compartir en WhatsApp"
            title="WhatsApp"
            className={iconButtonClass}
          >
            <FaWhatsapp className="size-5" />
          </button>

          <button
            type="button"
            onClick={shareOnFacebook}
            aria-label="Compartir en Facebook"
            title="Facebook"
            className={iconButtonClass}
          >
            <LuFacebook className="size-5" />
          </button>

          <button
            type="button"
            onClick={shareOnX}
            aria-label="Compartir en X"
            title="X"
            className={iconButtonClass}
          >
            <FaXTwitter className="size-4" />
          </button>

          <button
            type="button"
            onClick={copyLink}
            aria-label={copied ? 'Enlace copiado' : 'Copiar enlace'}
            title={copied ? 'Copiado' : 'Copiar enlace'}
            className={iconButtonClass}
          >
            {copied ? (
              <LuCheck className="size-5" />
            ) : (
              <LuCopy className="size-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShareButtons
