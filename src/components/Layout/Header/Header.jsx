import { useState } from "react";
import { useContext } from "react";
import { FormattedMessage } from "react-intl"; // Es para cambiar el idioma
import { lanContext } from "../../../context/lanContext";
import "./Header.css"


export default function Header() {
    const data = useContext(lanContext);
    const [activeBar, setActiveBar] = useState(false);
    const [scrollTop, setScrollTop] = useState(false);

    window.onscroll = ()=>{
        window.scrollY > 100 ? setScrollTop(true) : setScrollTop(false)
    }

    const handleClickActiveBar = (event) => {
        setActiveBar(current => !current);
    };

    const imgUS = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208573/portafolio/assets/img/header/us_zckvng.svg";
    const imgEC = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208565/portafolio/assets/img/header/ec_pdihc4.svg";
    const Logo = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208565/portafolio/assets/img/header/DYEC_b1ctph.svg";
    const hamburge = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208570/portafolio/assets/img/header/Hamburge_oua80r.svg";
    const close = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208566/portafolio/assets/img/header/close_xr0wro.svg";
    const moon = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208573/portafolio/assets/img/header/Moon_dk6mxg.svg";

  return (
    <header className={`header h-14 w-full flex flex-row justify-between items-center bg-transparent  ${scrollTop ? 'fixed' : 'absolute '} z-500`}>
        <a href="/">
            <img className="w-[5.25rem]" src={Logo} alt="" />
        </a>
        <div className="lg:flex flex-row gap-2 items-center justify-center">
            <ul  className={`list_optios_header absolute top-[4.5rem] left-0 w-full p-5 glass flex flex-col gap-3 items-center ${!activeBar && 'hidden'}`}>
                <li>
                    <a href="#home">
                        <FormattedMessage
                            id="nav.home"
                        />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <FormattedMessage
                            id="nav.about-me"
                        />
                    </a>
                </li>
                <li>
                    <a href="#skill">
                        <FormattedMessage
                            id="nav.skill"
                        />
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <FormattedMessage
                            id="nav.experience"
                        />
                    </a>
                </li>
                <li>
                    <a href="#project">
                        <FormattedMessage
                            id="nav.project"
                        />
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <FormattedMessage
                            id="nav.contact"
                        />
                    </a>
                </li>
                <li className="lenguajes flex flex-row gap-5">
                    <img onClick={()=> data.changeLanguage('es-EC')} src={imgEC} alt="EC" />
                    <img onClick={()=> data.changeLanguage('en-US')} src={imgUS} alt="US" />
                </li>
            </ul>
            <div className="flex flex-row gap-5 items-center">
                <img className="cursor-pointer h-[1.125rem]" src={moon} alt="" />
                <img onClick={handleClickActiveBar} className={`cursor-pointer h-[1.25rem] ${activeBar && 'hidden'} lg:hidden`} src={hamburge} alt="" />
                <img onClick={handleClickActiveBar} className={`cursor-pointer h-[1.25rem] ${!activeBar && 'hidden'} lg:hidden`} src={close} alt="" />
            </div>
        </div>
    </header>
  )
}
