'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import type { Movie } from '@/types/Movie'

import MovieSearch from '@/components/admin/MovieSearch'
import MovieSelectionCard from '@/components/admin/MovieSelectionCard'
import FormField from '@/components/ui/FormField'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

import { createWatchlistMovie } from '@/lib/services/watchlist'
import PrioritySelector from '@/components/ui/PrioritySelector'

function NewWatchlistMovie() {
  const router = useRouter()

  const [movie, setMovie] = useState<Movie | null>(null)

  const [posterPath, setPosterPath] = useState<string | null>(null)
  const [backdropPath, setBackdropPath] = useState<string | null>(null)

  const [notes, setNotes] = useState('')
  const [priority, setPriority] = useState(5)

  function handleMovieSelect(movie: Movie) {
    setMovie(movie)
    setPosterPath(movie.posterPath)
    setBackdropPath(movie.backdropPath)
  }

  const mutation = useMutation({
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

    console.log({
      movieId: movie.id,
      title: movie.title,
      posterPath,
      backdropPath,
      year: movie.year,
      tmdbRating: movie.tmdbRating,
      notes,
      priority,
    })

    mutation.mutate({
      movieId: movie.id,
      title: movie.title,
      posterPath,
      backdropPath,
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
          Agrega una película a tu lista personal.
        </p>
      </div>

      <MovieSearch onSelect={handleMovieSelect} />

      {movie && (
        <MovieSelectionCard
          title={movie.title}
          year={movie.year}
          rating={movie.tmdbRating}
          posterPath={posterPath}
          backdropPath={backdropPath}
        />
      )}

      <FormField label="¿Por qué quiero verla?">
        <Textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </FormField>

      <FormField label="Prioridad">
        <PrioritySelector value={priority} onChange={setPriority} />
      </FormField>

      <Button onClick={handleSave}>Guardar</Button>
    </div>
  )
}

export default NewWatchlistMovie
