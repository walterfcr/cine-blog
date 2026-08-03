'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import type { Movie } from '@/types/Movie'

import MovieSearch from '@/components/admin/MovieSearch'
import WatchlistSelectionCard from '@/components/admin/WatchlistSelectionCard'
import Button from '@/components/ui/Button'

import { createWatchlistMovie } from '@/lib/services/watchlist'

function NewWatchlistMovie() {
  const router = useRouter()

  const [movie, setMovie] = useState<Movie | null>(null)

  const [notes, setNotes] = useState('')
  const [priority, setPriority] = useState(1)

  function handleMovieSelect(movie: Movie) {
    setMovie(movie)
  }

  const createMutation = useMutation({
    mutationFn: createWatchlistMovie,

    onSuccess: () => {
      router.push('/admin')
    },

    onError: (error) => {
      console.error(error)
      alert('No se pudo guardar la película.')
    },
  })

  function handleSave() {
    if (!movie) {
      alert('Selecciona una película.')

      return
    }

    createMutation.mutate({
      movieId: movie.id,

      title: movie.title,

      posterPath: movie.posterPath,

      backdropPath: movie.backdropPath,

      year: movie.year,

      tmdbRating: movie.tmdbRating,

      notes,

      priority,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Película que quiero ver</h1>

        <p className="text-text-secondary">
          Agrega una película a tu lista pendiente.
        </p>
      </div>

      <MovieSearch onSelect={handleMovieSelect} />

      {movie && (
        <WatchlistSelectionCard
          title={movie.title}
          year={movie.year}
          rating={movie.tmdbRating}
          posterPath={movie.posterPath}
          notes={notes}
          priority={priority}
          onNotesChange={setNotes}
          onPriorityChange={setPriority}
        />
      )}

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={createMutation.isPending}>
          {createMutation.isPending ? 'Guardando...' : 'Guardar película'}
        </Button>
      </div>
    </div>
  )
}

export default NewWatchlistMovie
