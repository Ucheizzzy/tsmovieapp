import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Bookmark, Error, Landing, Movie, Series } from './pages'
import { MovieProvider } from './context/movieContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: '/movies',
    element: <Movie />,
  },
  {
    path: '/tv-series',
    element: <Series />,
  },
  {
    path: '/bookmarks',
    element: <Bookmark />,
  },
])

const App = () => {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  )
}

export default App
