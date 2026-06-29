import type { Review } from '@/types/Review'

export const reviews: Review[] = [
  {
    id: '1',
    movieId: 157336,
    title: 'Una experiencia cinematográfica inolvidable',
    excerpt:
      'Christopher Nolan construye una historia enorme sobre tiempo, amor y sacrificio.',
    content:
      'Interstellar es una película que mezcla ciencia ficción con emociones humanas profundas...',
    rating: 10,
    author: 'Admin',
    createdAt: '2026-06-28',
    published: true,
  },
  {
    id: '2',
    movieId: 27205,
    title: 'Un viaje dentro de la mente',
    excerpt: 'Una película compleja que recompensa verla más de una vez.',
    content:
      'Inception juega con la idea de los sueños y la percepción de la realidad...',
    rating: 9,
    author: 'Admin',
    createdAt: '2026-06-20',
    published: true,
  },
]
