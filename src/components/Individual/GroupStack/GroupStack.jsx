import React from 'react'
import "./GroupStack.css"

export default function GroupStack({h2, span, colorSpan, children}) {
  const colores = ['','naranja', 'green', 'morado']

  return (
    <div className="group-stack mt-16">
      <div className='flex flex-row items-baseline gap-2'>
        <h2 className='text-white text-xl'>{h2}</h2>
        <h3 className={`Raleway font-medium text-xl ${colores[colorSpan]}`}>{span}</h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center  md:gap-16">
        {children}
      </div>
    </div>
  )
}
