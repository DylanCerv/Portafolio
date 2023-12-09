import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CarruselCard({src, title, description, URL, URL_Github, tools=[]}) {
  return (
    <article className='flex flex-col gap-6 min-w-[300px] md:flex-row'>
        <img className='rounded-lg md:w-1/3' src={src} alt={title} />
        <div className='md:flex flex-col justify-between'>
            <div className='flex flex-col gap-4'>
                <h2 className='color-azul text-3xl font-semibold'>{title}</h2>
                <div className='flex flex-wrap gap-3'>
                    {tools.map((data, index)=>(
                        <IconContext.Provider value={{ size: 20, }}>
                            <div key={index} className='flex flex-wrap items-center gap-1'>
                                {data.icon}
                                <p className='text-white'>{data.name}</p>
                            </div>
                        </IconContext.Provider>
                    ))}
                </div>
                <p className='text-gray-400'>{description}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-5 ml-auto'>
                    <IconContext.Provider value={{ size: 24, }}>
                        {URL && 
                            <Link to={URL} target='_blank'>
                                <FaLink className='hover:text-[#20c7c5]' />
                            </Link>
                        }
                        {URL_Github && 
                            <Link to={URL_Github} target='_blank'>
                                <FaGithub className='hover:text-[#20c7c5]' />
                            </Link>
                        }
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </article>
  )
}
