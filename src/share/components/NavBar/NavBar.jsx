import React from 'react'
import { IoLogoDesignernews } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className='px-4 py-2 flex flex-row items-center justify-between mx-auto max-w-[1300px] sm:px-6'>
      <IoLogoDesignernews size={50} />
      <article className='hidden sm:flex flex-row gap-5 font-semibold'>
        <a href="#">Sobre Mi</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </article>
    </nav>
  )
}
