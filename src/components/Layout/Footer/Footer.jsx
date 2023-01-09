import React from "react";
import "./Footer.css";
import EnlacesFooter from "../../Individual/EnlacesFooter/EnlacesFooter";
import { FormattedMessage } from "react-intl";
import useLazyLoading from "../../../Hooks/useLazyLoading";

export default function Footer() {

  const { isNearScreen, fromRef } = useLazyLoading({distance: '200px'})

  const trianguloLeft = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208576/portafolio/assets/img/Figures/Triangulo-left-footer_quyzbu.svg";
  const trianguloRigth = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208564/portafolio/assets/img/Figures/Triangulo-right-footer_lqwdbn.svg";
  const trianguloBorder = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208560/portafolio/assets/img/Figures/Triangulo-border-footer_o3lw46.svg";
  const polygon = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208560/portafolio/assets/img/Figures/Polygon-footer_jvnnlz.svg";
  const polygonBorder = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208557/portafolio/assets/img/Figures/Polygon-boder-footer_dpnjhs.svg";
  const Logo = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208565/portafolio/assets/img/header/DYEC_b1ctph.svg";


  return (
    <footer className="p-0 overflow-hidden" ref={fromRef}>
      {isNearScreen && 
        <>
          <svg className="-mb-1 lg:-mb-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#030720"
              fillOpacity="1"
              d="M0,192L80,176C160,160,320,128,480,122.7C640,117,800,139,960,144C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <div className="footer relative bg-footer p-3">
            <div className="figures opacity-50">
              <img className="absolute -z-[1] top-20 right-[30%]" src={polygon} alt="" />
              <img className="absolute hidden -z-[1] -top-[20%] right-[60%] w-[10%] md:block" src={polygon} alt="" />
              <img className="absolute -z-[1] -top-[5%]" src={polygonBorder} alt="" />
              <img className="absolute -z-[1] bottom-10 right-0 w-[10%] lg:w-[6%] lg:right-[10%] lg:-bottom-[5%]" src={polygonBorder} alt="" />
              <img className="absolute -z-[1] bottom-[50%] left-[30%] " src={trianguloBorder} alt="" />
              <img className="absolute -z-[1] bottom-[10%] " src={trianguloBorder} alt="" />
              <img className="absolute -z-[1] right-[20%] -top-[5%]" src={trianguloBorder} alt="" />
              <img className="absolute -z-[1] top-[10%] -right-[5%] md:right-0" src={trianguloLeft} alt="" />
              <img className="absolute -z-[1] top-[50%] left-0" src={trianguloRigth} alt="" />
            </div>
            <div className="relative flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between md:mx-10">
              <a href="#home">
                <img className="w-[184px] lg:w-[15rem]" src={Logo} alt="" />
              </a>
              <div className="flex flex-row justify-between items-center gap-10 mb-10">
                <div className="flex flex-col gap-2">
                  <a href={`#home`} className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text={<FormattedMessage id="footer.home" />} />
                  </a>
                  <a href={`#about`} className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text={<FormattedMessage id="footer.about-me" />} />
                  </a>
                  <a href={`#skill`} className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text={<FormattedMessage id="footer.skill" />} />
                  </a>
                  <a href={`#experience`} className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text={<FormattedMessage id="footer.experience" />} />
                  </a>
                  <a href={`#project`} className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text={<FormattedMessage id="footer.project" />} />
                  </a>
                  <a href={`#contact`} className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text={<FormattedMessage id="footer.contact" />} />
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={'https://www.linkedin.com/in/dylan-espana/'} target='_blank' className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text="Linkedin" />
                  </a>
                  <a href={'https://api.whatsapp.com/send?phone=593997237902&text=Hola%20Dylan,%20Soy%20...'} target='_blank' className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text="Whatsapp" />
                  </a>
                  <a href={'https://github.com/DylanCerv'} target='_blank' className='EnlacesFooter flex flex-row gap-2'>
                    <EnlacesFooter text="Github" />
                  </a>
                </div>
              </div>
            </div>
            <p className="copy text-center pt-2 text-white text-xs">
              &#169; Dylan S. España Cervantes
            </p>
          </div>
        </>
      }
    </footer>
  );
}
