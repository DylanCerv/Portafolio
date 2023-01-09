import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function FormContact() {
    const origin = window.location.origin;
    console.log(origin)

  return (
    <form action="https://formsubmit.co/dylanecervantes@gmail.com" method="POST" className="form flex flex-col gap-5 z-0">
        <div className=" flex flex-col md:flex-row gap-5 justify-between">
            <input className="w-full" type="text" name="Name" id="" required placeholder="Name"/>
            <input className="w-full" type="number" name="Phone" id="" required placeholder="Phone (+593 ...)"/>
        </div>
            <input className="w-full" type="text" name="Email" id="" required placeholder="Email"/>
            <input className="w-full" type="text" name="Subject" id="" required placeholder="Subject"/>
            <textarea className="w-full" name="Message" id="" cols="30" rows="6" required placeholder="Message"></textarea>

            <button className="btn-shadow w-full" type="submit"><FormattedMessage id="contact.button" /></button>

        <div>
            <input type="hidden" name="_autoresponse" value="Hola, muchas gracias por ponerte en contacto conmigo, dentro de poco estare contestando tu E-mail, que tengas un lindo dia." />
            <input type="hidden" name="_subject" value="EYYYYYYY - Nuevo correo desde mi Portafolio"/>
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${origin}/#contact`} />
            <input type="text" name="_honey" className="hidden" />
        </div>
    </form>
  )
}
