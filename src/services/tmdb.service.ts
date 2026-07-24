import axios from 'axios'
import { mapMovie } from '../mappers/movie.mapper'
import type { Movie } from '@/types/Movie'
import type { TmdbImagesResponse } from '@/types/TmdbImagesResponse'
import type { TmdbCast } from '@/types/TmdbCast'

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: 'application/json',
  },
})

export async function getPopularMovies() {
  const response = await tmdbApi.get('/movie/popular', {
    params: {
      language: 'es-ES',
    },
  })

  return response.data.results.map(mapMovie)
}

export async function getMovieDetails(movieId: string) {
  const response = await tmdbApi.get(`/movie/${movieId}`, {
    params: {
      language: 'es-ES',
    },
  })

  return mapMovie(response.data)
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await tmdbApi.get('/search/movie', {
    params: {
      query,
      language: 'es-ES',
    },
  })

  return response.data.results.map(mapMovie)
}

export async function getMovieImages(movieId: string) {
  const response = await tmdbApi.get<TmdbImagesResponse>(
    `/movie/${movieId}/images`,
    {
      params: {
        include_image_language: 'es,en,null',
      },
    },
  )

  return response.data
}

export async function getMovieCredits(movieId: string): Promise<TmdbCast[]> {
  const response = await tmdbApi.get(`/movie/${movieId}/credits`, {
    params: {
      language: 'es-ES',
    },
  })

  return response.data.cast
}
