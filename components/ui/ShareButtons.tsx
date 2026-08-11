'use client'

import { useState } from 'react'
import { LuCheck, LuCopy, LuFacebook, LuShare2 } from 'react-icons/lu'

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
    const url = encodeURIComponent(getShareUrl())
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

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleShare}
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
              hover:bg-accent-hover
            "
          >
            <LuShare2 />
            Compartir
          </button>

          <button
            type="button"
            onClick={shareOnWhatsApp}
            aria-label="Compartir en WhatsApp"
            className="
              inline-flex
              h-10
              items-center
              justify-center
              rounded-lg
              border
              border-border
              px-3
              text-sm
              font-semibold
              text-text-primary
              transition-colors
              hover:border-accent
              hover:text-accent
            "
          >
            WhatsApp
          </button>

          <button
            type="button"
            onClick={shareOnFacebook}
            aria-label="Compartir en Facebook"
            className="
              inline-flex
              h-10
              items-center
              justify-center
              rounded-lg
              border
              border-border
              px-3
              text-sm
              font-semibold
              text-text-primary
              transition-colors
              hover:border-accent
              hover:text-accent
            "
          >
            Facebook
          </button>

          <button
            type="button"
            onClick={shareOnX}
            aria-label="Compartir en X"
            className="
              inline-flex
              h-10
              items-center
              justify-center
              rounded-lg
              border
              border-border
              px-3
              text-sm
              font-semibold
              text-text-primary
              transition-colors
              hover:border-accent
              hover:text-accent
            "
          >
            X
          </button>

          <button
            type="button"
            onClick={copyLink}
            aria-label="Copiar enlace"
            className="
              inline-flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-border
              px-3
              text-sm
              font-semibold
              text-text-primary
              transition-colors
              hover:border-accent
              hover:text-accent
            "
          >
            {copied ? <LuCheck /> : <LuCopy />}

            {copied ? 'Copiado' : 'Copiar'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShareButtons
