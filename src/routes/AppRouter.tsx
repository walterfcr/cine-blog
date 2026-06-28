import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'

import Home from '@/pages/Home'
import Movies from '@/pages/Movies'
import Reviews from '@/pages/Reviews'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

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
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
