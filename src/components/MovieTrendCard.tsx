import { MovieDataType } from '../assets/data'
import { useMovieContext } from '../context/movieContext'
import moviesIcon from '../assets/icons/icon-category-movie.svg'
import tvSeriesIcon from '../assets/icons/icon-category-tv.svg'
import { BookmarkIcon, BookmarkEmptyIcon } from './icons'

type Props = {
  movie: MovieDataType
}
const MovieTrendCard = ({ movie }: Props) => {
  const { dispatch } = useMovieContext()

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE BOOKMARK', id })
  }
  return (
    <div className='card w-52 bg-neutral text-neutral-content shadow-lg'>
      <div className='card-body p-0 relative flex '>
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          className='w-52 rounded-lg'
        />
        <div className='absolute top-0 right-0 bottom-0 left-0 rounded-lg bg-[rgba(0,0,0,0.6)]'></div>
        <div className='mt-6 space-x-0 absolute bottom-0 left-0 right-0 p-4'>
          <div className='items-center space-x-1 flex gap-x-3'>
            <h3 className='text-xs' aria-label='year of the movie'>
              {movie.year}
            </h3>
            <div className='flex gap-x-1'>
              <img
                src={movie.category === 'Movies' ? moviesIcon : tvSeriesIcon}
              />
              <h3 className='text-xs' aria-label='movie category'>
                {movie.category}
              </h3>
            </div>
            <h3 className='text-xs'>{movie.rating}</h3>
          </div>
          <h2>{movie.title}</h2>
        </div>
        <div className='absolute top-0 left-0 right-0 flex justify-end p-4'>
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
    </div>
  )
}

export default MovieTrendCard
