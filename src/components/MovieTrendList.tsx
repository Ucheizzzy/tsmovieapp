import { MovieTrendCard } from '.'
import { MovieDataType } from '../assets/data'

type Props = {
  trendingList: MovieDataType[]
}
const MovieTrendList = ({ trendingList }: Props) => {
  return (
    <div className='grid md:grid-cols-5 gap-y-2'>
      {trendingList.map((movie) => {
        return (
          <div key={movie.id}>
            <div className='bg-transparent'>
              <MovieTrendCard movie={movie} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieTrendList
