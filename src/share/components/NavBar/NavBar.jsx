import React from 'react'
import { IoLogoDesignernews } from "react-icons/io";


const LINKS = [
  // {name: 'Sobre Mi', href: '#'},
  {name: 'Experiencia', href: '#experiencia'},
  {name: 'Proyectos', href: '#proyectos'},
  {name: 'Contacto', href: '#contacto'},
];

export default function NavBar() {
  return (
    <nav className='px-4 py-2 flex flex-row items-center justify-between mx-auto max-w-[1300px] sm:px-6'>
      <IoLogoDesignernews size={50} />
      <article className='hidden sm:flex flex-row gap-5 font-semibold'>
        {LINKS.map((data, index)=>(
          <a key={index} className='hover:text-[#20c7c5]' href={data.href}>{data.name}</a>
        ))}
      </article>
    </nav>
  )
}
