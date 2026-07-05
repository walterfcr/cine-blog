import type { HeroData } from '@/types/HeroData'
import { Link } from 'react-router-dom'

interface HeroProps {
  data: HeroData
}

function Hero({ data }: HeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-border
        min-h-[520px]
      "
    >
      <img
        src={data.backdrop}
        alt={data.movieTitle}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-background
          via-background/70
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          flex
          min-h-[520px]
          max-w-2xl
          flex-col
          justify-center
          p-8
          md:p-16
        "
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-text-muted">
          Reseña destacada
        </p>

        <h1 className="mb-3 text-5xl font-bold text-text-primary md:text-6xl">
          {data.movieTitle}
        </h1>

        <h2 className="mb-4 text-2xl font-semibold text-accent">
          {data.reviewTitle}
        </h2>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-secondary">
          {data.excerpt}
        </p>

        <div className="mb-8 text-xl font-semibold text-rating">
          ★ {data.rating}/10
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to={data.readReviewUrl}
            className="
              rounded-lg
              bg-accent
              px-6
              py-3
              font-medium
              text-white
              transition-colors
              hover:bg-accent-hover
            "
          >
            Leer reseña
          </Link>

          <Link
            to={data.movieDetailsUrl}
            className="
              rounded-lg
              border
              border-white/20
              bg-white/10
              px-6
              py-3
              font-medium
              text-white
              backdrop-blur-sm
              transition-colors
              hover:bg-white/20
            "
          >
            Ficha técnica
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
