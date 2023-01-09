import React from 'react'
import { FormattedMessage } from "react-intl";


export default function CV() {
    let idioma = "";
    const es_EC = "es-EC";
    const en_US = "en-US";
    
    if (localStorage.getItem('language') == undefined) {
        localStorage.setItem('language', es_EC);
    }
    if (localStorage.getItem('language') == es_EC) {
        idioma = "Es"
    }
    if (localStorage.getItem('language') == en_US) {
        idioma = "En"
    }

  return (
    <>
        { idioma &&
            <embed className='h-screen w-screen' src={`${import.meta.env.BASE_URL}public/PDFs/${idioma}_Dylan_Espana_Cervantes.pdf`} type="application/pdf" />
        }
    </>
  )
}
