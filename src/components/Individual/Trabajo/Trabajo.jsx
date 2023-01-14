import React from 'react'
import "./Trabajo.css"
import { FormattedMessage } from 'react-intl'

export default function Trabajo({empresa, cargo, fecha, children, dueño, technologies}) {

  
    

  return (
    <div className="mb-10">
        <h2 className='uppercase'>{empresa} <span className='text-sm ml-2 font-normal'>{dueño}</span></h2>
        <div className='flex flex-row items-baseline gap-3 mb-2'>
            <h2 className='mb-2 mt-3'>
              <FormattedMessage 
                id="experience.position-title"
              />{" "}
              <span className='font-normal'>{cargo}</span>
            </h2>
            <span className='text-[0.65rem]'>{fecha}</span>
        </div>
        <div className='mb-2'>
            <h2 className='mb-2 mt-3'>
              <FormattedMessage 
                id="experience.activities-title"
              />
            </h2>
            <ul>
                {children}
            </ul>
        </div>
        <div>
        <h2 className='mb-2 mt-3'>
              <FormattedMessage 
                id="experience.technologies-title"
              />
            </h2>
            <div>
              <p>{technologies}</p>
            </div>
        </div>
    </div>
  )
}
