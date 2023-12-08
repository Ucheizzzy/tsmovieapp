import { SetStateAction, useState } from 'react'
import { HomeLayout } from '.'
import SearchIcon from '../assets/icons/icon-search.svg'
import { MovieList, MovieTrendList } from '../components'
import { MovieDataType } from '../assets/data'
import { useMovieContext } from '../context/movieContext'

const Landing = () => {
  const [search, setSearch] = useState<string>('')
  const [searchList, setSearchList] = useState<MovieDataType[]>([])
  const {
    state: { Movies },
  } = useMovieContext()

  const trendingList: MovieDataType[] = Movies.filter(
    (item) => item.isTrending === true
  )
  const recommendedList: MovieDataType[] = Movies.filter(
    (item) => item.isTrending !== true
  )
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value)
    const newList = Movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchList(newList)
  }

  return (
    <HomeLayout>
      <section>
        <form className='flex items-center rounded-sm p-1 border-non relative'>
          <input
            type='text'
            placeholder='Search for movies or TV series'
            className='input input-ghost w-full max-w-xs border-none ms-1'
            value={search}
            onChange={handleSearch}
          />
          <img
            src={SearchIcon}
            alt='search icon'
            className='w-6 h-6 absolute left-0'
          />
        </form>
      </section>

      <section className='py-2 px-2'>
        {search === '' ? (
          <div className='w-full'>
            <div className='w-full'>
              <h1 className='font-extrabold my-6 tracking-widest uppercase'>
                Trending
              </h1>
              <MovieTrendList trendingList={trendingList} />
            </div>
            <div className='w-full'>
              <h1 className='font-extrabold my-6 tracking-widest uppercase'>
                Recommended for you
              </h1>
              <MovieList recommendedList={recommendedList} />
            </div>
          </div>
        ) : (
          <div className='w-full'>
            <h1>
              Found {searchList.length} results '{search}'{' '}
            </h1>
            <MovieList recommendedList={searchList} />
          </div>
        )}
      </section>
    </HomeLayout>
  )
}

export default Landing
