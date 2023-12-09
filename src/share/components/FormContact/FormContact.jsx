import React from 'react'

export default function FormContact() {


    const inputsResponses = (
        <article className='hidden'>
            <div data-section="hire" data-value="send-Response">
                <input className='hidden' type="hidden" name="_autoresponse" value="Hola, muchas gracias por ponerte en contacto conmigo, dentro de poco estare contestando tu E-mail, que tengas un lindo dia." />
            </div>
            <input className='hidden' type="hidden" name="_subject" value="EYYYYYYY - Nuevo correo desde mi Portafolio" />
            <input className='hidden' type="hidden" name="_template" value="table" />
            <input className='hidden' type="hidden" name="_captcha" value="false" />
            <input className='hidden' type="hidden" name="_next" value="https://dylan-cerv.web.app/#Form" />
            <input className='hidden' type="text" name="_honey" />
        </article>
    )

  return (
    <form className='mt-10 md:mt-0 flex flex-col gap-5' action="https://formsubmit.co/dylanecervantes@gmail.com" method='POST'>
        <div className='flex flex-col gap-2'>
            <Input
                type="text"
                name='name'
                placeholder='Nombre'
                required={true}
            />
            <Input
                type="number"
                name='phone'
                placeholder='Telefono +593...'
                required={true}
            />
            <Input
                type="text"
                name='email'
                placeholder='Email'
                required={true}
            />
        </div>
        <div>
            <textarea
                className='contactForm bg-black/[50%] rounded-lg px-4 py-2 w-full'
                name="message"
                id=""
                rows="6"
                placeholder='Mensaje'
                required
            >
            </textarea>
            <button
                className='bg-[#42b6b48c] hover:bg-[#42b6b4] px-8 py-4 w-full rounded-lg mt-3 font-semibold'
                type="submit"
                data-section="hire"
                data-value="button"
            >Enviar Mensaje</button>
        </div>
        {inputsResponses}
    </form>
  )
}


function Input ({className, type, name, placeholder, required = false}) {
    return (
        <input
            className={`contactForm bg-black/[50%] rounded-lg px-4 py-2 w-full ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
        />
    )
}