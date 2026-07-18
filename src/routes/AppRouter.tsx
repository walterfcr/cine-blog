import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import AdminLayout from '@/layouts/AdminLayout'

//import ProtectedRoute from '@/components/admin/ProtectedRoute'

import Home from '@/pages/Home'
import Movies from '@/pages/Movies'
import MovieDetail from '@/pages/MovieDetail'
import Reviews from '@/pages/Reviews'
import ReviewDetail from '@/pages/ReviewDetail'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

import Login from '@/pages/admin/Login'
import Dashboard from '@/pages/admin/Dashboard'
import NewReview from '@/pages/admin/NewReview'
import EditReview from '@/pages/admin/EditReview'

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

  {
    path: '/admin/login',
    element: <Login />,
  },

  {
    path: '/admin',
    element: (
      //<ProtectedRoute>
      <AdminLayout />
      //</ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'reviews/new',
        element: <NewReview />,
      },
      {
        path: 'reviews/:reviewId',
        element: <EditReview />,
      },
    ],
  },
])
