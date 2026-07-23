import { Link } from 'react-router-dom'

import type { HeroData } from '@/types/HeroData'

interface HeroProps {
  data: HeroData
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        rounded-3xl
        border
        border-border
        min-h-[680px]
      "
    >
      {/* Background */}
      <img
        src={data.backdrop}
        alt={data.movieTitle}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Overall subtle darkening */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/35" />

      {/* Soft fade only behind text */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-[65%]

          bg-gradient-to-r
          from-black/75
          via-black/40
          to-transparent
        "
      />

      {/* Bottom cinematic fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40

          bg-gradient-to-t
          from-black/70
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[680px]
          items-end pb-20
          px-8
          md:px-14
          lg:px-20
        "
      >
        <div className="max-w-2xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/70">
            RESEÑA DESTACADA
          </p>

          <h1
            className="
              text-5xl
              font-black
              leading-none
              tracking-tight
              text-white

              md:text-7xl
            "
          >
            {data.movieTitle}
          </h1>

          <h2
            className="
              mt-5
              text-2xl
              font-semibold
              text-accent
            "
          >
            {data.reviewTitle}
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-lg
              leading-8
              text-white/85
            "
          >
            {data.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-rating text-2xl">
              {'★'.repeat(Math.round(data.rating))}
              {'☆'.repeat(10 - Math.round(data.rating))}
            </span>

            <span className="text-2xl font-bold text-rating">
              {data.rating}/10
            </span>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              to={data.readReviewUrl}
              className="
                rounded-lg
                bg-accent
                px-7
                py-3

                font-semibold
                text-white

                transition

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
                border-white/30

                bg-white/10

                px-7
                py-3

                font-semibold
                text-white

                transition

                hover:bg-white/20
              "
            >
              Ficha técnica
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
