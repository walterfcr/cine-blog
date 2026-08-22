import Link from 'next/link'

import type { Review } from '@/types/Review'
import type { Movie } from '@/types/Movie'

import BackButton from '@/components/ui/BackButton'
import { formatDate } from '@/lib/utils/formatDate'
import { getImageUrl } from '@/lib/utils/image'

interface ReviewArticleProps {
  review: Review
  movie: Pick<Movie, 'id' | 'title'> | null
  preview?: boolean
}

function ReviewArticle({ review, movie, preview = false }: ReviewArticleProps) {
  return (
    <>
      {review.backdropPath && (
        <div
          className="
            relative
            min-h-[520px]
            overflow-hidden
            rounded-2xl
            border
            border-border
            md:min-h-[580px]
            lg:min-h-[620px]
          "
        >
          <img
            src={getImageUrl(review.backdropPath, 'original')}
            alt={review.title}
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
              inset-0
              bg-gradient-to-r
              from-black/90
              via-black/55
              to-black/10
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-48
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              flex
              min-h-[520px]
              flex-col
              justify-end
              p-7
              md:min-h-[580px]
              md:p-12
              lg:min-h-[620px]
              lg:p-16
            "
          >
            {!preview && <BackButton variant="overlay" />}

            {preview && (
              <div
                className="
                  absolute
                  left-7
                  top-7
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/80
                  backdrop-blur-sm
                  md:left-12
                  md:top-12
                  lg:left-16
                  lg:top-16
                "
              >
                Vista previa
              </div>
            )}

            <div className="mt-auto max-w-3xl">
              <header className="space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-semibold text-rating">
                    ★ {review.rating}/10
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/40" />

                  {review.authorName && (
                    <>
                      <span className="text-sm text-white/80">
                        Por {review.authorName}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/40" />
                    </>
                  )}

                  {!preview && (
                    <span className="text-sm text-white/70">
                      {formatDate(review.createdAt)}
                    </span>
                  )}

                  {preview && (
                    <span className="text-sm text-white/70">Borrador</span>
                  )}
                </div>

                <h1
                  className="
                    max-w-3xl
                    text-4xl
                    font-bold
                    leading-[0.98]
                    tracking-tight
                    text-white
                    [text-shadow:0_3px_12px_rgba(0,0,0,0.8)]
                    md:text-5xl
                    lg:text-7xl
                  "
                >
                  {review.title || 'Título de la reseña'}
                </h1>

                {movie && (
                  <div className="pt-1">
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-white/50
                      "
                    >
                      Película
                    </p>

                    {preview ? (
                      <p
                        className="
                          mt-1
                          text-lg
                          font-semibold
                          text-white/90
                          [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]
                          md:text-xl
                        "
                      >
                        {movie.title}
                      </p>
                    ) : (
                      <Link
                        href={`/movies/${movie.id}`}
                        className="
                          mt-1
                          inline-block
                          text-lg
                          font-semibold
                          text-white/90
                          [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]
                          transition-colors
                          hover:text-rating
                          md:text-xl
                        "
                      >
                        {movie.title}
                      </Link>
                    )}
                  </div>
                )}
              </header>
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-3xl sm:px-0">
        <p
          className="
            text-xl
            leading-8
            text-text-secondary
            md:text-2xl
            md:leading-9
          "
        >
          {review.excerpt || 'Aquí aparecerá el extracto de la reseña.'}
        </p>
      </section>

      <div className="mx-auto max-w-3xl py-12">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
            La reseña
          </span>

          <span className="h-px flex-1 bg-border" />
        </div>
      </div>

      <section className="mx-auto max-w-3xl space-y-8">
        {review.content ? (
          review.content.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className="
                text-base
                leading-8
                text-text-secondary
                md:text-lg
                md:leading-9
              "
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-base leading-8 text-text-muted md:text-lg">
            Aquí aparecerá el contenido de la reseña.
          </p>
        )}
      </section>
    </>
  )
}

export default ReviewArticle
