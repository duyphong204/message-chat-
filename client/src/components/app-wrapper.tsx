import React from 'react'
import Asidebar from './aside-bar'

interface Props {
  children: React.ReactNode
}
const AppWrapper = ({ children }: Props) => {
  return (
    <div className='h-full'>
      {/* Toolbar */}
      <Asidebar />
      <main className='lg:pl-10 h-full'>{children}</main>
    </div>
  )
}

export default AppWrapper