import { useEffect, useState } from 'react'
import type { Movie } from '@/types/Movie'

import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import FormField from '@/components/ui/FormField'
import StarRating from '@/components/ui/StarRating'
import ToggleSwitch from '@/components/ui/ToggleSwitch'
import Button from '@/components/ui/Button'
import MovieSelectionCard from '@/components/admin/MovieSelectionCard'
import { getMovieDetails, getMovieImages } from '@/services/tmdb.service'
import { useQuery, useMutation } from '@tanstack/react-query'
import Modal from '@/components/ui/Modal'
import ImagePicker from '@/components/admin/ImagePicker'
import { getReview, updateReview } from '@/services/review.service'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { reviewKeys } from '@/queries/queryKeys'

function EditReview() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { reviewId } = useParams()
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

  const { data: images } = useQuery({
    queryKey: ['movie-images', movie?.id],
    queryFn: () => getMovieImages(String(movie!.id)),
    enabled: !!movie,
  })

  const { data: review } = useQuery({
    queryKey: reviewKeys.detail(reviewId!),
    queryFn: () => getReview(reviewId!),
    enabled: !!reviewId,
  })

  const { data: movieData } = useQuery({
    queryKey: ['movie', review?.movieId],
    queryFn: () => getMovieDetails(String(review!.movieId)),
    enabled: !!review,
  })

  useEffect(() => {
    if (!review) return

    setTitle(review.title)
    setExcerpt(review.excerpt)
    setContent(review.content)

    setRating(review.rating)

    setPosterPath(review.posterPath)
    setBackdropPath(review.backdropPath)

    setFeatured(review.featured)
    setPublished(review.published)
  }, [review])

  useEffect(() => {
    if (!movieData) {
      return
    }

    setMovie(movieData)
  }, [movieData])

  const updateReviewMutation = useMutation({
    mutationFn: (data: {
      movieId: number
      title: string
      excerpt: string
      content: string
      rating: number
      posterPath: string | null
      backdropPath: string | null
      featured: boolean
      published: boolean
    }) => updateReview(reviewId!, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewKeys.admin,
      })
      queryClient.invalidateQueries({
        queryKey: reviewKeys.all,
      })
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

    updateReviewMutation.mutate({
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
        <h1 className="text-4xl font-bold">Editar reseña</h1>
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
              disabled={updateReviewMutation.isPending}
            >
              {updateReviewMutation.isPending
                ? 'Guardando...'
                : 'Guardar cambios'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditReview
