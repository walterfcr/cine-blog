import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Input from '@/components/ui/Input'
import { searchMovies } from '@/services/tmdb'

import type { Movie } from '@/types/Movie'

interface MovieSearchProps {
  onSelect: (movie: Movie) => void
}

function MovieSearch({ onSelect }: MovieSearchProps) {
  const [query, setQuery] = useState('')

  const { data: movies } = useQuery({
    queryKey: ['movie-search', query],
    queryFn: () => searchMovies(query),
    enabled: query.length >= 2,
  })

  return (
    <div className="space-y-4">
      <Input
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.length >= 2 && (
        <div className="space-y-2">
          {query.length >= 2 &&
            movies?.map((movie) => (
              <button
                key={movie.id}
                type="button"
                onClick={() => {
                  onSelect(movie)
                  setQuery('')
                }}
                className="
              w-full
              rounded-lg
              border
              border-border
              p-3
              text-left
              transition-colors
              hover:bg-surface-hover
            "
              >
                <strong>{movie.title}</strong>

                <p className="text-sm text-text-muted">{movie.year}</p>
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export default MovieSearch
