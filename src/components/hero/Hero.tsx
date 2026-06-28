import type { Movie } from '@/types/Movie'

interface HeroProps {
  movie: Movie
}

function Hero({ movie }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center p-8">
          <p className="mb-4 text-sm uppercase tracking-widest text-text-muted">
            Reseña destacada
          </p>

          <h1 className="mb-6 text-5xl font-bold text-text-primary">
            {movie.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-text-secondary">
            {movie.overview}
          </p>
        </div>

        <div>
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
