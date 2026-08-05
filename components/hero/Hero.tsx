'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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

      <div className="absolute inset-0 bg-black/20 dark:bg-black/35" />

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full md:w-[70%]
          lg:w-[65%]

          bg-gradient-to-r
          from-black/95
          via-black/60
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40

          bg-gradient-to-t
          from-black/85
          to-transparent
        "
      />

      <div
        key={current}
        className="
          relative
          z-10
          flex
          min-h-[520px] 
          md:min-h-[620px] 
          lg:min-h-[680px]
          items-end
          pb-10
          px-6
          md:pb-16
          md:px-12
          lg:pb-20
          lg:px-20

          animate-fade
        "
      >
        <div className="max-w-2xl">
          <p
            className="
          mb-5 text-xs
          tracking-[0.25em]
          pt-10
          md:text-sm
          md:tracking-[0.35em] 
          uppercase 
          text-white/70"
          >
            RESEÑA DESTACADA
          </p>

          <h1
            className="

              font-bold
              tracking-tight
              text-white
              text-4xl
              leading-tight
              md:text-6xl
              lg:text-7xl
            "
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,.75)',
            }}
          >
            {slide.movieTitle}
          </h1>

          <h2
            className="
              mt-5
              text-2xl
              font-semibold
              text-hero-highlight
            "
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,.65)',
            }}
          >
            {slide.reviewTitle}
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-lg
              line-clamp-3
              text-base
              leading-7
              md:line-clamp-none
              md:text-lg
              md:leading-8
              text-white/85
            "
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,.7)',
            }}
          >
            {slide.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-rating text-2xl">
              {'★'.repeat(Math.round(slide.rating))}
              {'☆'.repeat(10 - Math.round(slide.rating))}
            </span>

            <span className="text-xl md:text-2xl font-bold text-rating">
              {slide.rating}/10
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={slide.readReviewUrl}
              className="
                rounded-lg
                bg-accent
               w-full
                px-6
                py-3
                text-center
                sm:w-auto

                font-semibold
                text-white

                transition

                hover:bg-accent-hover
              "
            >
              Leer reseña
            </Link>

            <Link
              href={slide.movieDetailsUrl}
              className="
                rounded-lg
                border
                border-white/30

                bg-white/10

                w-full
                px-6
                py-3
                text-center
                sm:w-auto

                font-semibold
                text-white

                transition

                hover:bg-white/20
              "
            >
              Ficha técnica
            </Link>
            <div className="mt-8 justify-center md:justify-start flex items-center gap-3">
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
