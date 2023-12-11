import { MovieCard } from '.'
import { MovieDataType } from '../assets/data'

type Props = {
  recommendedList: MovieDataType[]
}

const MovieList = ({ recommendedList }: Props) => {
  console.log(recommendedList)
  return (
    <div className='grid md:grid-cols-4 gap-x-2'>
      {recommendedList.map((movie) => {
        return (
          <div key={movie.id} className=''>
            <div className='bg-transparent '>
              <MovieCard movie={movie} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
