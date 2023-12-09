import React from 'react'

export default function Card({children, className='', id=''}) {
  return (
    <article id={id} className={`card w-fits p-10 rounded-xl border border-white/[10%] ${className}`}>
      {children}
    </article>
  )
}
