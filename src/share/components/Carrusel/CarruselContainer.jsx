import React from 'react'

export default function CarruselContainer({children, className}) {
  return (
    <section className={`flex flex-row gap-5 w-full overflow-x-auto scroll-carrusel md:overflow-auto md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-16 ${className}`}>
      {children}
    </section>
  )
}
