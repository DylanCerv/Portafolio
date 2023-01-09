import React from 'react'
import "./CardProject.css"
import useLazyLoading from '../../../Hooks/useLazyLoading'

export default function CardProject({img1, img2, title, openModal}) {

  const {isNearScreen, fromRef} = useLazyLoading({distance: '300px'})

  return (
    <div ref={fromRef} onClick={openModal} className="CardProject flex flex-col items-center justify-between">
      {isNearScreen &&
        <>
          <div className='bg-gray-card w-full px-3 flex flex-row items-center justify-between'>
            <div className=' flex flex-row gap-2'>
              <div className='rounded-full w-3 h-3 bg-[#ff5f57]'></div>
              <div className='rounded-full w-3 h-3 bg-[#ffbd2e]'></div>
              <div className='rounded-full w-3 h-3 bg-[#28ca41]'></div>
            </div>
            <div className='font-semibold mx-5'>{title}</div>
          </div>
          <div className="cursor-pointer image-container">
            <img src={img1} alt="Imagen de fondo" className="background-image" />
            <img src={img2} alt="Imagen de cortina" className="curtain-image" />
          </div>
        </>
      }
    </div>
  )
}
