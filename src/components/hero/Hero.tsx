import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import type { HeroData } from '@/types/HeroData'

interface HeroProps {
  data: HeroData[]
}

export default function Hero({ data }: HeroProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = data[current]

  useEffect(() => {
    if (data.length <= 1 || paused) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [data.length, paused])

  if (!slide) {
    return null
  }
  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
        src={slide.backdrop}
        alt={slide.movieTitle}
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
        key={current}
        className="
          relative
          z-10
          flex
          min-h-[680px]
          items-end
          pb-20
          px-8
          md:px-14
          lg:px-20

          animate-fade
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
            {slide.movieTitle}
          </h1>

          <h2
            className="
              mt-5
              text-2xl
              font-semibold
              text-accent
            "
          >
            {slide.reviewTitle}
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
            {slide.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-rating text-2xl">
              {'★'.repeat(Math.round(slide.rating))}
              {'☆'.repeat(10 - Math.round(slide.rating))}
            </span>

            <span className="text-2xl font-bold text-rating">
              {slide.rating}/10
            </span>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              to={slide.readReviewUrl}
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
              to={slide.movieDetailsUrl}
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
            <div className="mt-10 flex items-center gap-3">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`
                    h-3
                    w-3
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      current === index
                        ? 'bg-accent scale-110'
                        : 'bg-white/40 hover:bg-white/70'
                    }
                  `}
                  aria-label={`Ir a la reseña ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
