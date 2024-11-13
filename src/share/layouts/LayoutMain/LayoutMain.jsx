import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function LayoutMain({children}) {
  return (
    <div>
        <NavBar />
        <main className='p-4 sm:px-6 md:px-7 max-w-[1300px] mx-auto flex flex-col gap-16'>
            {children}
        </main>
    </div>
  )
}
