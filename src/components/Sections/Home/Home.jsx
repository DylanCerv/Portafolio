import "./Home.css"
import BTN_CV from "../../Individual/BTN_CV/BTN_CV";
import { useEffect } from "react";
import Typed from "typed.js";
import { useRef } from "react";

export default function Home() {

  const Link_LinkedIn = "https://www.linkedin.com/in/dylan-espana/";
  const Link_WhatsApp = "https://api.whatsapp.com/send?phone=593997237902&text=Hola%20Dylan,%20Soy%20...";
  const Link_GitHub = "https://github.com/DylanCerv";

  const polygon = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208560/portafolio/assets/img/Figures/polygon_hs8yjj.svg";
  const IMG = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208589/portafolio/assets/img/home/IMG_c2lknk.svg";
  const whatsapp = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208579/portafolio/assets/img/home/whatsapp_dc6u7t.svg";
  const linkedin = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208579/portafolio/assets/img/home/linkedin_c3kepe.svg";
  const github = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208578/portafolio/assets/img/home/github_hvisep.svg";

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(()=>{
    const options = {
      strings: [
        'Backend Developer',
        'Frontend Developer',
        'Full Stack Developer',
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true,
      startDelay: 900,
      backDelay: 1000,
      showCursor: false,
      cursorChar: '|',
      contentType: 'html'
    }
    typed.current = new Typed(el.current, options);
    
    return () => typed.current.destroy();
    
  },[])

  return (
    <section className="home relative flex flex-col justify-center items-center pt-[6rem] pb-[4rem] px-4 m-0 lg:flex-row" id="home">
      <div className="figures">
          <img className="absolute -z-[1] borde top-20 left-5" src={polygon} alt="" />
          <img className="absolute -z-[1] borde bottom-[5%] left-60" src={polygon} alt="" />
          <img className="absolute -z-[1] borde left-[50%] top-[30%]" src={polygon} alt="" />
          <img className="absolute -z-[1] borde bottom-[30%] right-[40%]" src={polygon} alt="" />
          <img className="absolute -z-[1] borde bottom-[45%] right-5 w-[20%]" src={polygon} alt="" />
      </div>
      <div className="flex justify-center items-center animacionUpDown">
        <img className="md:w-[400px] lg:w-[28.93rem]" src={IMG} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="nombre text-white font-normal md:!text-[70px]">Dylan S. España C.</h1>
        <p className="mb-8 cargo text-white md:text-3xl h-[1ch]" ref={el}></p>
        <div className="flex flex-row gap-10 mb-[1.5rem]">
          <a href={Link_LinkedIn} target="_blank">
            <img className="md:w-11" src={linkedin} alt="" />
          </a>
          <a href={Link_WhatsApp} target="_blank">
            <img className="md:w-11" src={whatsapp} alt="" />
          </a>
          <a href={Link_GitHub} target="_blank">
            <img className="md:w-11" src={github} alt="" />
          </a>
        </div>
        <BTN_CV />
      </div>
    </section>
  )
}
