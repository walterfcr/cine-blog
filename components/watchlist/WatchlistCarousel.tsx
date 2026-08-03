'use client'

import { useRef } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

import type { WatchlistMovie } from '@/types/WatchlistMovie'

import WatchlistGrid from './WatchlistGrid'

interface Props {
  movies: WatchlistMovie[]
}

function WatchlistCarousel({ movies }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollLeft() {
    scrollRef.current?.scrollBy({
      left: -248,
      behavior: 'smooth',
    })
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({
      left: 248,
      behavior: 'smooth',
    })
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={scrollLeft}
          className="
            rounded-full
            border
            border-border
            p-2
            transition
            hover:border-accent
            hover:text-accent
          "
        >
          <LuChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={scrollRight}
          className="
            rounded-full
            border
            border-border
            p-2
            transition
            hover:border-accent
            hover:text-accent
          "
        >
          <LuChevronRight size={20} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="
          flex
          gap-6
          overflow-x-auto
          pb-4

          snap-x
          snap-mandatory

          scroll-smooth

          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <WatchlistGrid movies={movies} />
      </div>
    </section>
  )
}

export default WatchlistCarousel
