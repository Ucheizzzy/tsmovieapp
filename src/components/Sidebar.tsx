import homeIcon from '../assets/icons/icon-nav-home.svg'
import movieIcon from '../assets/icons/icon-nav-movies.svg'
import tvSeriesIcon from '../assets/icons/icon-nav-tv-series.svg'
import bookmarkIcon from '../assets/icons/icon-nav-bookmark.svg'
import { useLocation, Link } from 'react-router-dom'
type linkType = {
  name: string
  icon: string
  link: string
}
const navLinks: linkType[] = [
  {
    name: 'Home',
    icon: homeIcon,
    link: '/',
  },
  { name: 'Movies', icon: movieIcon, link: '/movies' },
  {
    name: 'TV Series',
    icon: tvSeriesIcon,
    link: '/tv-series',
  },
  {
    name: 'Bookmarks',
    icon: bookmarkIcon,
    link: '/bookmarks',
  },
]

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <aside className='bg-[#161d2f] p-2 rounded-sm flex sm:flex-row lg:flex-col items-center justify-between sm:w-full lg:w-52'>
      <div className='flex sm:flex-row lg:flex-col gap-5 sm:items-center lg:items-start w-full'>
        <h2 className='text-lg font-extrabold  my-2 hidden sm:block'>
          Movie App
        </h2>

        <div className='py-4 flex sm:flex-row lg:flex-col gap-4 '>
          {navLinks.map((item) => {
            return (
              <Link key={item.name} to={item.link} className='no-underline'>
                <div className='flex items-center gap-2 text-white no-underline'>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className='w-4'
                    style={{
                      color: '#fff',
                      filter: `${
                        pathname == item.link
                          ? 'invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)'
                          : 'invert(84%)  '
                      }`,
                    }}
                  />
                  <h3 className='hidden md:block'>{item.name}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
