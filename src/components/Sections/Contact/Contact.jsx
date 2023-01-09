import "./Contact.css"
import { FormattedMessage } from 'react-intl'
import FormContact from "../../Individual/Form/FormContact"
import useLazyLoading from "../../../Hooks/useLazyLoading"

export default function Contact() {

  const { isNearScreen, fromRef } = useLazyLoading({distance: '200px'})


  return (
    <section className="p-0 imgFigura" id="contact" ref={fromRef}>
      {isNearScreen &&
        <div className="px-[16px] py-5">
          <div className="mb-10">
            <h1 className="uppercase">
              <FormattedMessage 
                id="contact.title-general"
              />
            </h1>
            <p>
              <FormattedMessage 
                id="contact.description-general"
              />
            </p>
          </div>
          <div className="contactGrid">
            <div className="hidden md:flex flex-col gap-5">
              <div className="flex flex-row gap-3">
                <div className="bg-circle-contact p-3 rounded-full">
                  <img className="w-5 h-5" src="https://res.cloudinary.com/dnnjctymr/image/upload/v1673208557/portafolio/assets/img/contact/address_rmtov6.svg" alt="" />
                </div>
                <div>
                  <h4 className="m-0"><FormattedMessage id="contact.type.address" /></h4>
                  <p className="text-xs">Ecuador-Esmeraldas</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="bg-circle-contact p-3 rounded-full">
                <a href="mailto:dylanecervantes@gmail.com" target={"_blank"}>
                  <img className="w-5 h-5" src="https://res.cloudinary.com/dnnjctymr/image/upload/v1673208557/portafolio/assets/img/contact/email_nhjvlj.svg" alt="" />
                </a>
                </div>
                <div>
                  <h4 className="m-0">Email</h4>
                  <p className="text-xs">dylanecervantes@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="bg-circle-contact p-3 rounded-full">
                  <a href="https://api.whatsapp.com/send?phone=593997237902&text=Hola%20Dylan,%20Soy%20..." target={"_blank"}>
                    <img className="w-5 h-5" src="https://res.cloudinary.com/dnnjctymr/image/upload/v1673208558/portafolio/assets/img/contact/phone_t2besp.svg" alt="" />
                  </a>
                </div>
                <div>
                  <h4 className="m-0">WhatsApp</h4>
                  <p className="text-xs">+593 997237902</p>
                </div>
              </div>
            </div>
            <FormContact />
          </div>
        </div>
      }
    </section>
  )
}
