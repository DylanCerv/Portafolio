import React from 'react'
import useLazyLoading from '../../../Hooks/useLazyLoading';
import "./Tecnologia.css"

export default function Tecnologia({imglink, text}) {

  const {isNearScreen , fromRef} = useLazyLoading({distance: '300px'});

  return (
    <div className='w-[70px] text-center flex flex-col items-center' ref={fromRef}>
      {isNearScreen &&
        <>
          <img className='imgTech' src={imglink} alt="" />
          <p className='text-white'>{text}</p>
        </>
      }
    </div>
  )
}