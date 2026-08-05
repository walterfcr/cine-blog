'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import type { HeroData } from '@/types/HeroData'

interface HeroProps {
  data: HeroData[]
}

interface IntroSlide {
  type: 'intro'
  backdrop: string
}

interface ReviewSlide extends HeroData {
  type: 'review'
}

type HeroSlide = IntroSlide | ReviewSlide

const introSlide: IntroSlide = {
  type: 'intro',
  backdrop: '/cinema-hero.webp',
}

export default function Hero({ data }: HeroProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const slides: HeroSlide[] = [
    introSlide,
    ...data.map((slide) => ({
      ...slide,
      type: 'review' as const,
    })),
  ]

  const slide = slides[current]

  useEffect(() => {
    if (slides.length <= 1 || paused) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [slides.length, paused])

  if (!slide) {
    return null
  }

  const isIntro = slide.type === 'intro'

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="
        relative
        isolate
        min-h-[680px]
        overflow-hidden
        rounded-3xl
        border
        border-border
      "
    >
      <img
        src={slide.backdrop}
        alt={isIntro ? 'Sala de cine' : slide.movieTitle}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      <div className="absolute inset-0 bg-black/25 dark:bg-black/40" />

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-full
          bg-gradient-to-r
          from-black/95
          via-black/60
          to-transparent
          md:w-[70%]
          lg:w-[65%]
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
          items-end
          px-6
          pb-10
          animate-fade
          md:min-h-[620px]
          md:px-12
          md:pb-16
          lg:min-h-[680px]
          lg:px-20
          lg:pb-20
        "
      >
        <div className="max-w-2xl">
          {isIntro ? (
            <>
              <p
                className="
                  mb-5
                  pt-10
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                  md:text-sm
                  md:tracking-[0.45em]
                "
              >
                CINE BLOG
              </p>

              <h1
                className="
                  max-w-2xl
                  text-4xl
                  leading-[1.05]
                  tracking-tight
                  text-white
                  md:text-6xl
                  lg:text-7xl
                "
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,.8)',
                }}
              >
                El cine se vive
                <span className="block text-accent">
                  más allá de la pantalla.
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-7
                  text-white/85
                  md:text-lg
                  md:leading-8
                "
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,.7)',
                }}
              >
                Reseñas personales, películas que dejan algo y conversaciones
                sobre historias que merecen ser recordadas.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/reviews"
                  className="
                    w-full
                    rounded-lg
                    bg-accent
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-accent-hover
                    sm:w-auto
                  "
                >
                  Explorar reseñas
                </Link>

                <Link
                  href="/about"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    backdrop-blur-sm
                    transition
                    hover:bg-white/20
                    sm:w-auto
                  "
                >
                  Sobre Cine Blog
                </Link>
              </div>
            </>
          ) : (
            <>
              <p
                className="
                  mb-5
                  pt-10
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                  md:text-sm
                  md:tracking-[0.35em]
                "
              >
                RESEÑA DESTACADA
              </p>

              <h1
                className="
                  text-4xl
                  leading-tight
                  tracking-tight
                  text-white
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
                  line-clamp-3
                  text-base
                  leading-7
                  text-white/85
                  md:line-clamp-none
                  md:text-lg
                  md:leading-8
                "
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,.7)',
                }}
              >
                {slide.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="text-2xl text-rating">
                  {'★'.repeat(Math.round(slide.rating))}
                  {'☆'.repeat(10 - Math.round(slide.rating))}
                </span>

                <span className="text-xl font-bold text-rating md:text-2xl">
                  {slide.rating}/10
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.readReviewUrl}
                  className="
                    w-full
                    rounded-lg
                    bg-accent
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-accent-hover
                    sm:w-auto
                  "
                >
                  Leer reseña
                </Link>

                <Link
                  href={slide.movieDetailsUrl}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-white/20
                    sm:w-auto
                  "
                >
                  Ficha técnica
                </Link>
              </div>
            </>
          )}

          <div className="mt-8 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-3
                  w-3
                  cursor-pointer
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    current === index
                      ? 'scale-110 bg-accent'
                      : 'bg-white/40 hover:bg-white/70'
                  }
                `}
                aria-label={
                  index === 0 ? 'Ir a introducción' : `Ir a la reseña ${index}`
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
