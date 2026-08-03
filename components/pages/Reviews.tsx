'use client'

import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Spinner from '@/components/ui/Spinner'
import SearchInput from '@/components/ui/SearchInput'
import ReviewGrid from '@/components/review/ReviewGrid'

import { getReviews } from '@/lib/services/review'
import { reviewKeys } from '@/lib/queries/query-keys'

import Pagination from '@/components/ui/Pagination'

function Reviews() {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const REVIEWS_PER_PAGE = 8

  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: reviewKeys.all,
    queryFn: getReviews,
  })

  const filteredReviews = useMemo(() => {
    if (!reviews) return []

    const query = search.toLowerCase().trim()

    return reviews.filter((review) => {
      return (
        review.movieTitle?.toLowerCase().includes(query) ||
        review.title.toLowerCase().includes(query)
      )
    })
  }, [reviews, search])

  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE)

  const paginatedReviews = useMemo(() => {
    const start = (currentPage - 1) * REVIEWS_PER_PAGE

    return filteredReviews.slice(start, start + REVIEWS_PER_PAGE)
  }, [filteredReviews, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [search])

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>Ha ocurrido un error.</p>
  }

  return (
    <Container className="space-y-10 py-16">
      <header className="space-y-4">
        <SectionTitle>Reseñas</SectionTitle>

        <p className="max-w-2xl leading-8 text-text-secondary">
          Críticas personales sobre películas que considero memorables,
          infravaloradas o simplemente interesantes.
        </p>
      </header>

      <SearchInput
        placeholder="Buscar reseña..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="text-sm text-text-muted">
        {filteredReviews.length}{' '}
        {filteredReviews.length === 1 ? 'reseña' : 'reseñas'}
      </p>

      {filteredReviews.length > 0 ? (
        <>
          <ReviewGrid reviews={paginatedReviews} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-12 text-center">
          <h3 className="text-xl font-semibold">
            No encontramos ninguna reseña.
          </h3>

          <p className="mt-2 text-text-secondary">Intenta con otro título.</p>
        </div>
      )}
    </Container>
  )
}

export default Reviews
