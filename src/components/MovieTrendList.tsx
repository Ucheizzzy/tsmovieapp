import { MovieDataType } from '../assets/data'

type Props = {
  trendingList: MovieDataType[]
}
const MovieTrendList = ({ trendingList }: Props) => {
  console.log(trendingList)
  return (
    <div className='flex gap-2 overflow-x-scroll'>
      {trendingList.map((movie) => {
        return (
          <div key={movie.id}>
            <div className='bg-transparent'></div>
          </div>
        )
      })}
    </div>
  )
}

export default MovieTrendList
