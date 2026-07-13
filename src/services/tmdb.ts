import axios from 'axios'
import { mapMovie } from './movie.mapper'
import type { Movie } from '@/types/Movie'
import type { TmdbSearchResponse } from '@/types/TmdbSearchResponse'
import type { TmdbImagesResponse } from '@/types/TmdbImagesResponse'

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: 'application/json',
  },
  params: {
    language: 'es-ES',
  },
})

export async function getPopularMovies() {
  const response = await tmdbApi.get('/movie/popular')

  return response.data.results.map(mapMovie)
}

export async function getMovieDetails(movieId: string) {
  const response = await tmdbApi.get(`/movie/${movieId}`)

  return mapMovie(response.data)
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await tmdbApi.get<TmdbSearchResponse>('/search/movie', {
    params: {
      query,
    },
  })

  return response.data.results.map(mapMovie)
}

export async function getMovieImages(movieId: string) {
  const response = await tmdbApi.get<TmdbImagesResponse>(
    `/movie/${movieId}/images`,
  )

  return response.data
}
