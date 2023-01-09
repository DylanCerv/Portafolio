import React from 'react'
import "./EnlacesFooter.css"

export default function EnlacesFooter({text}) {
  const ancle = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208562/portafolio/assets/img/footer/iconEnlace_wzz5gi.svg";
  return (
    <>
        <img src={ancle} alt="" />
        {text}
    </>
  )
}
