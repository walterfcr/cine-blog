import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'

import Home from '@/pages/Home'
import Movies from '@/pages/Movies'
import Reviews from '@/pages/Reviews'
import ReviewDetail from '@/pages/ReviewDetail'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'
import MovieDetail from '@/pages/MovieDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetail />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'reviews/:reviewId',
        element: <ReviewDetail />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
