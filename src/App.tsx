import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Bookmark, Error, Landing, Movie, Series } from './pages'

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
  return <RouterProvider router={router} />
}

export default App
