import { ReactNode } from 'react'
import { Sidebar } from '../components'

interface LayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <main className='flex flex-col lg:flex-row  p-3 gap-3 h-screen overflow-y-hidden'>
      <Sidebar />
      <section className='w-full overflow-y-scroll'>{children}</section>
    </main>
  )
}

export default HomeLayout
