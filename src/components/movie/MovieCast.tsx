import type { TmdbCast } from '@/types/TmdbCast'

interface Props {
  cast: TmdbCast[]
}

function MovieCast({ cast }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-text-primary">Reparto</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {cast.slice(0, 6).map((actor) => (
          <div key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : '/placeholder-avatar.png'
              }
              alt={actor.name}
              className="
                aspect-[2/3]
                w-full
                rounded-lg
                object-cover
              "
            />

            <p className="mt-2 text-sm font-semibold text-text-primary">
              {actor.name}
            </p>

            <p className="text-xs text-text-muted">{actor.character}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MovieCast
