import { MovieDataType } from '../assets/data'
import { useMovieContext } from '../context/movieContext'

type Props = {
  trendingList: MovieDataType[]
}
const MovieTrendList = ({ trendingList }: Props) => {
  const { state, dispatch } = useMovieContext()
  console.log(state)

  return <div>MovieTrendList</div>
}

export default MovieTrendList
