import type { WatchlistMovie } from '@/types/WatchlistMovie'

import WatchlistCard from './WatchlistCard'

interface Props {
  movies: WatchlistMovie[]
}

function WatchlistGrid({ movies }: Props) {
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="
            w-56
            shrink-0
            snap-start
          "
        >
          <WatchlistCard movie={movie} />
        </div>
      ))}
    </>
  )
}

export default WatchlistGrid
