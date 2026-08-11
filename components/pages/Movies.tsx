'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import MovieGrid from '@/components/movie/MovieGrid'
import Spinner from '@/components/ui/Spinner'

import { useInfiniteQuery } from '@tanstack/react-query'

import { getMoviesByFilter, type MovieFilter } from '@/lib/services/tmdb'

const filters: {
  label: string
  value: MovieFilter
}[] = [
  {
    label: 'Recientes',
    value: 'recent',
  },
  {
    label: 'Drama',
    value: 'drama',
  },
  {
    label: 'Thriller',
    value: 'thriller',
  },
  {
    label: 'Ciencia ficción',
    value: 'science-fiction',
  },
  {
    label: 'Terror',
    value: 'horror',
  },
  {
    label: 'Animación',
    value: 'animation',
  },
]

function Movies() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const filterParam = searchParams.get('filter')

  const activeFilter: MovieFilter =
    filterParam && filters.some((filter) => filter.value === filterParam)
      ? (filterParam as MovieFilter)
      : 'recent'

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ['movies', activeFilter],

    queryFn: ({ pageParam }) => getMoviesByFilter(activeFilter, pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined
      }

      return lastPage.page + 1
    },
  })

  const movies = data?.pages.flatMap((page) => page.movies) ?? []

  function handleFilterChange(filter: MovieFilter) {
    const params = new URLSearchParams(searchParams.toString())

    if (filter === 'recent') {
      params.delete('filter')
    } else {
      params.set('filter', filter)
    }

    const query = params.toString()

    router.push(query ? `/movies?${query}` : '/movies')
  }

  return (
    <Container className="space-y-10">
      <div className="space-y-6">
        <SectionTitle>Películas</SectionTitle>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => handleFilterChange(filter.value)}
                className={`
                  rounded-lg
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  cursor-pointer
                  ${
                    isActive
                      ? 'border-accent bg-accent text-white'
                      : 'border-border bg-surface text-text-secondary hover:border-accent hover:text-accent'
                  }
                `}
              >
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>

      {isLoading && <Spinner />}

      {error && (
        <p className="text-text-secondary">
          No se pudieron cargar las películas.
        </p>
      )}

      {!isLoading && !error && (
        <>
          <MovieGrid movies={movies} />

          {hasNextPage && (
            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  bg-surface
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-text-primary
                  transition-colors
                  duration-200
                  cursor-pointer
                  hover:border-accent
                  hover:bg-surface-hover
                  hover:text-accent
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isFetchingNextPage ? 'Cargando...' : 'Cargar más películas'}
              </button>
            </div>
          )}
        </>
      )}
    </Container>
  )
}

export default Movies
