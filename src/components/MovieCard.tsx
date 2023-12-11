import { MovieDataType } from '../assets/data'
import moviesIcon from '../assets/icons/icon-category-movie.svg'
import tvSeriesIcon from '../assets/icons/icon-category-tv.svg'
import { useMovieContext } from '../context/movieContext'
import { BookmarkIcon, BookmarkEmptyIcon } from './icons'
type Props = {
  movie: MovieDataType
}

const MovieCard = ({ movie }: Props) => {
  const { dispatch } = useMovieContext()
  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE BOOKMARK', id })
  }
  return (
    <div className='card bg-transparent my-3 shadow-lg'>
      <div className='card-body relative p-0'>
        <div className='gap-2'>
          <img
            src={movie.thumbnail.regular.large}
            alt={movie.title}
            className='w-[400px] rounded-lg'
          />
        </div>
        <div className='flex place-items-center'>
          <h3 className='text-xs'>{movie.year}</h3>
          <div className='w-1 h-1 bg-white rounded-full m-3'></div>
          <div className='flex  items-center justify-center'>
            <img
              src={movie.category === 'Movies' ? moviesIcon : tvSeriesIcon}
              alt=''
              className='w-4 h-4'
            />
            <p className='text-xs m-2 w-50'>{movie.category}</p>
          </div>
          <div className='w-1 h-1 bg-white rounded-full m-2'></div>
          <h3 className='text-xs ms-2'>{movie.rating}</h3>
        </div>
        <h3 className='text-xs font-semibold p-0 m-0'>{movie.title}</h3>
      </div>
      <div className='absolute top-0 right-0 p-4'>
        <div
          className='p-4 bg-black rounded-full cursor-pointer hover:opacity-80'
          onClick={() => handleToggle(movie.id)}
        >
          {movie.isBookmarked ? (
            <BookmarkIcon fill={'#e0e0e0'} />
          ) : (
            <BookmarkEmptyIcon />
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
