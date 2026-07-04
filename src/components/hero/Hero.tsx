import type { HeroData } from '@/types/HeroData'
import { Link } from 'react-router-dom'

interface HeroProps {
  data: HeroData
}

function Hero({ data }: HeroProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center p-8">
          <p className="mb-4 text-sm uppercase tracking-widest text-text-muted">
            Reseña destacada
          </p>

          <h1 className="mb-4 text-5xl font-semibold text-text-primary">
            {data.movieTitle}
          </h1>

          <h2 className="mb-4 text-xl text-accent">{data.reviewTitle}</h2>

          <p className="mb-6 text-lg leading-relaxed text-text-secondary">
            {data.excerpt}
          </p>

          <div className="mb-6 text-rating">★ {data.rating}</div>

          <div className="flex gap-4">
            <Link
              to={data.readReviewUrl}
              className="
                rounded-lg
                bg-accent
                px-5
                py-3
                text-sm
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
                border-border
                px-5
                py-3
                text-sm
                font-medium
                text-text-primary
                transition-colors
                hover:bg-surface-hover
              "
            >
              Descubrir
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs text-red-500">{data.backdrop}</p>
          <img
            src={data.backdrop}
            alt={data.movieTitle}
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
