import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CarruselCard({src, title, description, URL, URL_Github, tools=[]}) {
  return (
    <article className='flex flex-col gap-6 min-w-[280px] md:flex-row md:h-fit'>
        <img className='rounded-lg md:w-3/6 md:h-3/6' src={src} alt={title} />
        <div className='h-full flex flex-col justify-between'>
            <div className='flex flex-col gap-4'>
                <h2 className='color-azul text-3xl font-semibold !text-sky-300'>{title}</h2>
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
            <div className='flex flex-row justify-between items-center md:mt-4'>
                <div className='flex flex-row gap-5 ml-auto'>
                    <IconContext.Provider value={{ size: 24, }}>
                        {URL && 
                            <Link to={URL} target='_blank' className='flex flex-row gap-2 border-[1.5px] rounded-md border-white/50 px-2 py-1'>
                                <FaLink className='hover:text-[#20c7c5]s' />
                                <p>Demo</p>
                            </Link>
                        }
                        {URL_Github && 
                            <Link to={URL_Github} target='_blank' className='flex flex-row gap-2 border-[1.5px] rounded-md border-white/50 px-2 py-1'>
                                <FaGithub className='hover:text-[#20c7c5]s' />
                                <p>Demo</p>
                            </Link>
                        }
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </article>
  )
}
