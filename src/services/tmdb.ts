import axios from 'axios'
import { mapMovie } from './movie.mapper'

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: 'application/json',
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
