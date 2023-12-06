import { MovieDataType } from '../assets/data'

type Props = {
  trendingList: MovieDataType[]
}
const MovieTrendList = ({ trendingList }: Props) => {
  console.log(trendingList)

  return <div>MovieTrendList</div>
}

export default MovieTrendList
