import React, { useEffect, useState } from "react";
import Card from "../share/components/Card/Card";
import LayoutMain from "../share/layouts/LayoutMain/LayoutMain";
import { SOBRE_MI } from "../share/data/General";
import { REDES } from "../share/data/Icons_links";
import { Link } from "react-router-dom";
import { FaDiscord, FaRegFilePdf } from "react-icons/fa";
import { EXPERIENCIA_LABORAL } from "../share/data/Experiencia";
import { BsChevronDoubleDown, BsChevronDoubleRight } from "react-icons/bs";
import { SKILLS_TECHNICAL } from "../share/data/Skills";
import { IconContext } from "react-icons";
import { CiMail } from "react-icons/ci";
import CountdownTimer from "../share/components/CountdownTimer/CountdownTimer";
import CarruselContainer from "../share/components/Carrusel/CarruselContainer";
import CarruselCard from "../share/components/Carrusel/CarruselCard";
import { PROYECTOS } from "../share/data/Proyectos";
import Footer from "../share/components/Footer/Footer";
import FormContact from "../share/components/FormContact/FormContact";
import { CONTACT_INFO } from "../share/data/Contact";
import CopyToClipboardButton from "../share/components/CopyToClipboardButton/CopyToClipboardButton";
import Contact from "../share/components/Contact/Contact";
import { IoIosMail } from "react-icons/io";

export default function Landing() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la hora cada segundo
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    const intervalId = setInterval(updateDateTime, 1000);

    // Limpiar intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // Obtener la hora local del usuario
  const userLocalTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    // timeZoneName: 'short',
  });
  const userLocalDay = currentDateTime.toLocaleDateString(undefined, {
    weekday: "long", // Día de la semana
  });
  const userLocalDate = currentDateTime.toLocaleDateString(undefined, {
    day: "numeric", // Día del mes
    month: "long", // Nombre del mes
    year: "numeric", // Año
  });

  return (
    <LayoutMain>
      <section id='sobre-mi' className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:grid-cols-8">
        <Card className="flex flex-col gap-4 lg:gap-4 col-span-3 sm:col-span-4 md:col-span-2 sm:row-span-2 lg:col-span-4">
          <div className="text-3xl font-bold lg:text-4xl">
            <h1 className="font-semibold lg:font-bold color-azul !text-sky-300">
              {SOBRE_MI.name}
            </h1>
            <h1>{SOBRE_MI.position}</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            {REDES.map((data, index) => (
              <Link key={index} to={data.href} className="hover:text-[#20c7c5]">
                {data.icon}
              </Link>
            ))}
            <a
              className="flex flex-row items-center gap-1 bg-sky-300 text-black hover:bg-[#20c7c5] rounded-lg font-medium px-3 py-1 ml-2"
              href={"/file/cvs/Es_Dylan_Espana_Cervantes.pdf"}
              download
            >
              <FaRegFilePdf /> Descargar CV
            </a>
          </div>
          <p className="font-medium text-gray-300">Email: <span className="font-normal text-gray-400 lg:leading-7">{CONTACT_INFO.mail}</span></p>
          <div>
            <p className="text-gray-400 lg:leading-7">{SOBRE_MI.description}</p>
            <p className="text-gray-400 lg:leading-7">{SOBRE_MI.phrase}</p>
          </div>
        </Card>
        <Card className="flex items-center justify-center col-span-3 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <div className="relative w-fit">
            <h1 className="color-azul !text-sky-300 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Ecuador
            </h1>
            <img
              className="absolute -top-5 -right-5"
              src="/icons/flag-ecuador.svg"
              alt=""
            />
          </div>
        </Card>
        <Card className="!px-2 !py-8 flex flex-col items-center justify-center text-center gap-4 col-span-3 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <h1 className="color-azul !text-sky-300 text-xl sm:text-xl lg:text-2xl font-semibold">
            Web Developer
          </h1>
          <h1 className="color-azul !text-sky-300 text-xl sm:text-xl lg:text-2xl font-semibold">
            Mobile Developer
          </h1>
          <h1 className="color-azul !text-sky-300 text-xl sm:text-xl lg:text-2xl font-semibold">
            Full Stack Developer (PHP, JS)
          </h1>
        </Card>
        <Card className="!p-0 overflow-hidden col-span-3 sm:col-span-2 lg:col-span-3">
          <img className="h-full w-full" src="/img/grid/setup.webp" alt="" />
        </Card>
        <Card className="hidden sm:block sm:!bg-white/[15%] lg:hidden flexs flex-col gap-2 text-center col-span-3 sm:col-span-2 lg:col-span-2">
          
        </Card>
        <Card className="tech flex flex-col gap-2 col-span-3 sm:col-span-5 lg:row-span-3">
          <h1 className="text-2xl font-bold color-azul !text-sky-300">
            Tecnologías (Skills)
          </h1>
          <section>
            {SKILLS_TECHNICAL.map((data, index) => (
              <article key={index} className="pt-5">
                <h1 className="text-xl font-semibold my-5">{data.title}</h1>
                <section className="flex flex-wrap gap-8">
                  <IconContext.Provider
                    value={{ className: "icon-skill", size: 40 }}
                  >
                    {data.skills.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                      >
                        <div>{tech.icon}</div>
                        <p className="text-gray-400 font-medium">{tech.name}</p>
                      </div>
                    ))}
                  </IconContext.Provider>
                </section>
              </article>
            ))}
          </section>
        </Card>
        <Card className="p-4 sm:p-10 flex items-center justify-center col-span-1 sm:col-span-2 sm:row-span-1 lg:row-span-2 lg:col-span-3">
          <Link to={"https://www.sethor.tech/"} target="_blank">
            <img src="/logo/sethor.svg" alt="" />
          </Link>
        </Card>
        <Card className="!p-0 overflow-hidden col-span-2 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-4">
          <img
            className="h-full w-full"
            src="/img/grid/frontcompute.webp"
            alt=""
          />
        </Card>
        <Card className="p-4 sm:p-10 flex items-center text-center col-span-1 sm:col-span-2 lg:col-span-4">
          <h1 className="color-azul !text-sky-300 text-3xl mx-auto font-semibold uppercase">
            {userLocalTime}
          </h1>
        </Card>
        <Card className="!p-0 overflow-hidden text-center col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-1">
          <img className="h-full w-full" src="/img/grid/desing.webp" alt="" />
        </Card>
        <Card className="block !bg-white/[15%] col-span-1 sm:col-span-2 lg:col-span-2"></Card>
        <Card className="hidden lg:flex flex-col col-span-1 sm:col-span-2 lg:col-span-4">
          <h1 className="color-azul !text-sky-300 text-2xl font-bold">
            Dias Restantes para mi cumpleaños
          </h1>
          <div className="flex flex-col items-end mt-6">
            <CountdownTimer />
            <h1 className="font-normal ml-auto text-gray-400">(10 de mayo)</h1>
          </div>
        </Card>
        <Card className="flex flex-col justify-center col-span-3 font-bold sm:col-span-2 lg:col-span-4">
          <div className="text-3xl mx-auto color-azul !text-sky-300 font-semibold">
            <h1>{userLocalDay}</h1>
            <h1>{userLocalDate}</h1>
          </div>
        </Card>
      </section>
      <section id='experiencia' className="flex flex-col gap-10">
        <article>
          <h1 className="font-bold text-3xl">Experiencia</h1>
          <p className="text-gray-400 mt-3">Me especializo en el desarrollo de Frontend y Backend utilizando tecnologías como TypeScript, React.js, Node.js y PHP. Ante desafíos complejos, los enfrento con paciencia, determinación y perseverancia, siempre buscando soluciones efectivas y eficientes.
          </p>
        </article>
        <ol className="relative border-s border-gray-200 sm:ml-10 md:ml-20">
          {EXPERIENCIA_LABORAL.map((data, index) => (
            <li className="mb-10 ms-4 -mt-3" key={index}>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mt-1.5 -start-1.5 sm:-start-[8px] border border-white"></div>
              <time className="mb-1 text-[28px] font-bold leading-none text-white">
                {data.Position_Held}
              </time>
              <h3 className="text-xl font-semibold color-azul !text-sky-300">
                {data.Company}
              </h3>
              <ul className="list-disc list-inside">
                {data.Performed_Activities.map((activity, index) => (
                  <li className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {activity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <section id='proyectos' className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card className="flex flex-col items-center gap-2 text-center col-span-1 justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold color-azul !text-sky-300">
            Proyectos en Desarrollo
          </h1>
          <BsChevronDoubleDown size={40} className="sm:hidden" />
          <div className="hidden sm:flex flex-row gap-2">
            <BsChevronDoubleRight size={40} />
            <BsChevronDoubleRight size={40} />
          </div>
        </Card>
        <Card className="flex flex-col justify-between items-center gap-2 col-span-1 sm:block">
          <article className="mr-auto">
            <h1 className="color-azul !text-sky-300 font-bold text-xl mb-2">Sethor (MVP)</h1>
            <p className="text-gray-3s00">
              Explorando soluciones en el espacio de pagos biométricos.
            </p>
            <div className="mt-6">
              <Link
                className="bg-zinc-950/[40%] hover:bg-zinc-950/[60%] border border-transparent hover:border-white/[50%] px-4 py-2 rounded-md"
                to={"https://www.sethor.tech"}
                target="_blank"
              >
                Conoce más
              </Link>
            </div>
          </article>
          {/* <div className="flex flex-row items-center justify-center w-[85vw] sm:w-auto">
            <hr className="w-full" />
            <div className="bg-black/[50%] p-2 rounded-full">&</div>
            <hr className="w-full" />
          </div>
          <article className="mr-auto">
            <h1 className="color-azul !text-sky-300 font-bold text-xl mb-2">VAU (MVP)</h1>
            <p>
              Desarrollando un ecosistema para potenciar las ventas en el ámbito
              de los coaches.
            </p>
          </article> */}
        </Card>
      </section>
      <section className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Proyectos</h1>
        <CarruselContainer className={'space-x-6'}>
          {PROYECTOS.map((data, index) => (
            <CarruselCard
              key={index}
              src={data.src}
              title={data.title}
              description={data.description}
              URL={data.URL}
              URL_Github={data.URL_Github}
              tools={data.tools}
            />
          ))}
        </CarruselContainer>
      </section>
      <Card id='contacto' className="flex flex-col col-span-3 gap-5">
        <header className="flex flex-row items-center gap-3">
          <IoIosMail color="#fff" size={40} />
          <h1 className="text-3xl lg:text-4xl font-bold color-azul !text-white">
            Contacto
          </h1>
        </header>
        <Contact text={CONTACT_INFO.mail} linkSend={`mailto:${CONTACT_INFO.mail}`} />
        <header className="flex flex-row items-center gap-3">
          <FaDiscord color="#fff" size={40} />
          <h1 className="text-3xl lg:text-4xl font-bold color-azul !text-white">
            Discord
          </h1>
        </header>
        <Contact text={CONTACT_INFO.discord} linkSend={`https://discord.com/channels/@me`} />
      </Card>
      <Footer />
    </LayoutMain>
  );
}
