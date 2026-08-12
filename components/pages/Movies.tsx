'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import MovieGrid from '@/components/movie/MovieGrid'
import Spinner from '@/components/ui/Spinner'
import SearchInput from '@/components/ui/SearchInput'

import { getMoviesByFilter, searchMovies } from '@/lib/services/tmdb'

import type { MovieFilter } from '@/lib/services/tmdb'

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
  const searchParam = searchParams.get('search')

  const [searchInput, setSearchInput] = useState(searchParam ?? '')

  const activeFilter: MovieFilter =
    filterParam && filters.some((filter) => filter.value === filterParam)
      ? (filterParam as MovieFilter)
      : 'recent'

  const isSearching = Boolean(searchParam)

  /*
   * Movies by filter
   */
  const {
    data: filteredData,
    isLoading: isLoadingFiltered,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error: filteredError,
  } = useInfiniteQuery({
    queryKey: ['movies', activeFilter],

    queryFn: ({ pageParam }) => getMoviesByFilter(activeFilter, pageParam),

    initialPageParam: 1,

    enabled: !isSearching,

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined
      }

      return lastPage.page + 1
    },
  })

  /*
   * Movie search
   */
  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    error: searchError,
  } = useQuery({
    queryKey: ['movie-search', searchParam],

    queryFn: () => searchMovies(searchParam!),

    enabled: isSearching,
  })

  const movies = filteredData?.pages.flatMap((page) => page.movies) ?? []

  /*
   * Change filter
   */
  function handleFilterChange(filter: MovieFilter) {
    const params = new URLSearchParams(searchParams.toString())

    params.delete('search')

    if (filter === 'recent') {
      params.delete('filter')
    } else {
      params.set('filter', filter)
    }

    const query = params.toString()

    router.push(query ? `/movies?${query}` : '/movies')
  }

  /*
   * Search
   */
  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const query = searchInput.trim()

    if (!query) {
      return
    }

    const params = new URLSearchParams()

    params.set('search', query)

    router.push(`/movies?${params.toString()}`)
  }

  /*
   * Clear search
   */
  function handleClearSearch() {
    setSearchInput('')

    const params = new URLSearchParams(searchParams.toString())

    params.delete('search')

    const query = params.toString()

    router.push(query ? `/movies?${query}` : '/movies')
  }

  const isLoading = isSearching ? isLoadingSearch : isLoadingFiltered

  const error = isSearching ? searchError : filteredError

  return (
    <Container className="space-y-10">
      <div className="space-y-8">
        <SectionTitle>Películas</SectionTitle>

        {/* Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <SearchInput
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Buscar una película..."
            className="flex-1"
          />

          <button
            type="submit"
            className="
              inline-flex
              h-12
              items-center
              justify-center
              rounded-xl
              bg-accent
              px-6
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-200
              cursor-pointer
              hover:bg-accent-hover
            "
          >
            Buscar
          </button>
        </form>

        {/* Search state */}
        {isSearching ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-secondary">
              Resultados para{' '}
              <span className="font-semibold text-text-primary">
                "{searchParam}"
              </span>
            </p>

            <button
              type="button"
              onClick={handleClearSearch}
              className="
                w-fit
                text-sm
                text-text-muted
                transition-colors
                cursor-pointer
                hover:text-accent
              "
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          /* Filters */
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
        )}
      </div>

      {/* Loading */}
      {isLoading && <Spinner />}

      {/* Error */}
      {error && (
        <p className="text-text-secondary">
          No se pudieron cargar las películas.
        </p>
      )}

      {/* Search results */}
      {!isLoading && !error && isSearching && (
        <>
          {searchResults && searchResults.length > 0 ? (
            <MovieGrid movies={searchResults} />
          ) : (
            <p className="text-text-secondary">
              No encontramos películas para esa búsqueda.
            </p>
          )}
        </>
      )}

      {/* Filter results */}
      {!isLoading && !error && !isSearching && (
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
