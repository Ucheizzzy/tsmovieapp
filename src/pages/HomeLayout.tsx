import { ReactNode } from 'react'
import { Sidebar } from '../components'

interface LayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <main className='flex sm:flex-col lg:flex-row p-3 gap-3 h-screen overflow-y-hidden'>
      <Sidebar />
      <div className='w-full overflow-scroll'>{children}</div>
    </main>
  )
}

export default HomeLayout
