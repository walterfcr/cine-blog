import axios from 'axios'

import { mapMovie } from '@/lib/mappers/movie.mapper'
import type { Movie } from '@/types/Movie'
import type { TmdbImagesResponse } from '@/types/TmdbImagesResponse'
import type { TmdbCast } from '@/types/TmdbCast'

const tmdbToken =
  process.env.NEXT_PUBLIC_TMDB_TOKEN || process.env.VITE_TMDB_TOKEN

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${tmdbToken}`,
    accept: 'application/json',
  },
})

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await tmdbApi.get('/movie/popular', {
    params: {
      language: 'es-ES',
    },
  })

  return response.data.results.map(mapMovie)
}

export type MovieFilter =
  | 'recent'
  | 'drama'
  | 'thriller'
  | 'science-fiction'
  | 'horror'
  | 'animation'

const genreIds: Record<MovieFilter, number | undefined> = {
  recent: undefined,
  drama: 18,
  thriller: 53,
  'science-fiction': 878,
  horror: 27,
  animation: 16,
}

export interface MoviesPage {
  movies: Movie[]
  page: number
  totalPages: number
}

export async function getMoviesByFilter(
  filter: MovieFilter,
  page = 1,
): Promise<MoviesPage> {
  const params: Record<string, string | number | boolean> = {
    language: 'es-ES',
    sort_by: 'popularity.desc',
    page,
    include_adult: false,
  }

  if (filter === 'recent') {
    params.sort_by = 'primary_release_date.desc'
    params['vote_count.gte'] = 20
  } else {
    params.with_genres = genreIds[filter]!
    params['vote_count.gte'] = 50
  }

  const response = await tmdbApi.get('/discover/movie', {
    params,
  })

  return {
    movies: response.data.results.map(mapMovie),
    page: response.data.page,
    totalPages: response.data.total_pages,
  }
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
