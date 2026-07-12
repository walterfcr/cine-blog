import { useState } from 'react'
import type { Movie } from '@/types/Movie'

import MovieSearch from '@/components/admin/MovieSearch'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import FormField from '@/components/ui/FormField'
import StarRating from '@/components/ui/StarRating'
import ToggleSwitch from '@/components/ui/ToggleSwitch'
import Button from '@/components/ui/Button'
import MovieSelectionCard from '@/components/admin/MovieSelectionCard'
import { getMovieImages } from '@/services/tmdb'
import { useQuery, useMutation } from '@tanstack/react-query'
import Modal from '@/components/ui/Modal'
import ImagePicker from '@/components/admin/ImagePicker'
import { createReview } from '@/services/review.supabase'
import { useNavigate } from 'react-router-dom'

function NewReview() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [posterPath, setPosterPath] = useState<string | null>(null)
  const [backdropPath, setBackdropPath] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(10)

  const [featured, setFeatured] = useState(false)
  const [published, setPublished] = useState(false)

  const [pickerOpen, setPickerOpen] = useState(false)

  const [pickerType, setPickerType] = useState<'poster' | 'backdrop'>('poster')

  function handleMovieSelect(movie: Movie) {
    setMovie(movie)

    setPosterPath(movie.posterPath)

    setBackdropPath(movie.backdropPath)
  }

  const { data: images } = useQuery({
    queryKey: ['movie-images', movie?.id],
    queryFn: () => getMovieImages(String(movie!.id)),
    enabled: !!movie,
  })

  const createReviewMutation = useMutation({
    mutationFn: createReview,

    onSuccess: () => {
      navigate('/admin')
    },

    onError: (error) => {
      console.error(error)
      alert('No se pudo guardar la reseña.')
    },
  })

  function handleSave() {
    if (!movie) {
      alert('Selecciona una película.')

      return
    }

    createReviewMutation.mutate({
      movieId: movie.id,

      title,

      excerpt,

      content,

      rating,

      posterPath,

      backdropPath,

      featured,

      published,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Nueva reseña</h1>

        <p className="text-text-secondary">
          Crea una nueva reseña para el blog.
        </p>
      </div>

      <Modal
        open={pickerOpen}
        title={
          pickerType === 'poster'
            ? 'Seleccionar póster'
            : 'Seleccionar backdrop'
        }
        onClose={() => setPickerOpen(false)}
      >
        {images && (
          <ImagePicker
            title=""
            images={pickerType === 'poster' ? images.posters : images.backdrops}
            selected={pickerType === 'poster' ? posterPath : backdropPath}
            onSelect={(path) => {
              if (pickerType === 'poster') {
                setPosterPath(path)
              } else {
                setBackdropPath(path)
              }

              setPickerOpen(false)
            }}
          />
        )}
      </Modal>
      <MovieSearch onSelect={handleMovieSelect} />

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {movie && (
            <MovieSelectionCard
              title={movie.title}
              year={movie.year}
              rating={movie.tmdbRating}
              posterPath={posterPath}
              backdropPath={backdropPath}
              onChangePoster={() => {
                setPickerType('poster')
                setPickerOpen(true)
              }}
              onChangeBackdrop={() => {
                setPickerType('backdrop')
                setPickerOpen(true)
              }}
            />
          )}

          <FormField label="Título de la reseña">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej. Una obra maestra de la ciencia ficción"
            />
          </FormField>

          <FormField label="Extracto">
            <Textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Breve resumen..."
            />
          </FormField>

          <FormField label="Contenido">
            <Textarea
              rows={14}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe aquí la reseña..."
            />
          </FormField>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-6 space-y-6">
            <h2 className="text-lg font-semibold">Configuración</h2>

            <FormField label="Calificación">
              <StarRating value={rating} onChange={setRating} />
            </FormField>

            <div className="space-y-4">
              <ToggleSwitch
                label="Reseña destacada"
                checked={featured}
                onChange={setFeatured}
              />

              <ToggleSwitch
                label="Publicar inmediatamente"
                checked={published}
                onChange={setPublished}
              />
            </div>

            <Button
              className="w-full"
              onClick={handleSave}
              disabled={createReviewMutation.isPending}
            >
              {createReviewMutation.isPending
                ? 'Guardando...'
                : 'Guardar reseña'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewReview
