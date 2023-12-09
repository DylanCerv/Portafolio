import React, { useEffect, useState } from "react";
import Card from "../share/components/Card/Card";
import LayoutMain from "../share/layouts/LayoutMain/LayoutMain";
import { SOBRE_MI } from "../share/data/General";
import { REDES } from "../share/data/Icons_links";
import { Link } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
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
        <Card className="flex flex-col gap-4 lg:gap-6 col-span-3 sm:col-span-4 md:col-span-2 sm:row-span-2 lg:col-span-4">
          <div className="text-3xl font-bold lg:text-4xl">
            <h1 className="font-semibold lg:font-bold color-azul">
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
              className="flex flex-row items-center gap-1 bg-[#1cadaa] hover:bg-[#20c7c5] rounded-lg font-medium px-3 py-1 ml-2"
              href={"/file/cvs/Es_Dylan_Espana_Cervantes.pdf"}
              download
            >
              <FaRegFilePdf /> Descargar CV
            </a>
          </div>
          <p className="text-gray-400 lg:leading-7">{SOBRE_MI.description}</p>
        </Card>
        <Card className="flex items-center justify-center col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <div className="relative w-fit">
            <h1 className="color-azul text-3xl lg:text-4xl font-bold">
              Ecuador
            </h1>
            <img
              className="absolute -top-5 -right-5"
              src="/icons/flag-ecuador.svg"
              alt=""
            />
          </div>
        </Card>
        <Card className="flex items-center text-center col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <h1 className="color-azul text-3xl lg:text-4xl font-bold">
            Desarrollador Full Stack (PHP, JS)
          </h1>
        </Card>
        <Card className="!p-0 overflow-hidden col-span-3 sm:col-span-2 lg:col-span-3">
          <img className="h-full w-full" src="/img/grid/setup.webp" alt="" />
        </Card>
        <Card className="hidden sm:block sm:!bg-white/[30%] lg:hidden flexs flex-col gap-2 text-center col-span-3 sm:col-span-2 lg:col-span-2"></Card>
        <Card className="tech flex flex-col gap-2 col-span-3 sm:col-span-5 lg:row-span-3">
          <h1 className="text-2xl font-bold color-azul">
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
          <h1 className="color-azul text-3xl mx-auto font-bold uppercase">
            {userLocalTime}
          </h1>
        </Card>
        <Card className="!p-0 overflow-hidden text-center col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-1">
          <img className="h-full w-full" src="/img/grid/desing.webp" alt="" />
        </Card>
        <Card className="block !bg-white/[30%] col-span-1 sm:col-span-2 lg:col-span-2"></Card>
        <Card className="hidden lg:flex flex-col col-span-1 sm:col-span-2 lg:col-span-4">
          <h1 className="color-azul text-2xl font-bold">
            Dias Restantes para mi cumpleaños
          </h1>
          <div className="flex flex-col items-end mt-6">
            <CountdownTimer />
            <h1 className="font-normal ml-auto">(10 de mayo)</h1>
          </div>
        </Card>
        <Card className="flex flex-col justify-center col-span-3 font-bold sm:col-span-2 lg:col-span-4">
          <div className="text-3xl mx-auto color-azul">
            <h1>{userLocalDay}</h1>
            <h1>{userLocalDate}</h1>
          </div>
        </Card>
      </section>
      <section id='experiencia' className="flex flex-col gap-10">
        <article>
          <h1 className="font-bold text-3xl">Experiencia</h1>
          <p className="text-gray-400 mt-3">
            Soy un apasionado desarrollador de software autodidacta en busca de
            nuevos desafíos. Me especializo en el desarrollo de front-end y
            backend TypeScript, React.js, Node.js y PHP.
            Incluso cuando me enfrento a problemas difíciles, sé cómo abordarlos
            con paciencia, determinación y perseverancia inquebrantable.
          </p>
        </article>
        <ol className="relative border-s border-gray-200 sm:ml-10 md:ml-20">
          {EXPERIENCIA_LABORAL.map((data, index) => (
            <li className="mb-10 ms-4 -mt-3" key={index}>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full mt-1.5 -start-1.5 sm:-start-[8px] border border-white"></div>
              <time className="mb-1 text-[28px] font-bold leading-none text-white">
                {data.Position_Held}
              </time>
              <h3 className="text-xl font-semibold color-azul">
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
          <h1 className="text-2xl lg:text-3xl font-bold color-azul">
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
            <h1 className="color-azul font-bold text-xl mb-2">Sethor (MVP)</h1>
            <p className="text-gray-3s00">
              Explorando soluciones en el espacio de pagos biométricos.
            </p>
            <div className="mt-6">
              <Link
                className="bg-zinc-950/[40%] hover:bg-zinc-950/[60%] border border-transparent hover:border-white/[50%] px-4 py-2 rounded-md"
                to={"https://sethor.tech"}
                target="_blank"
              >
                Conoce más
              </Link>
            </div>
          </article>
          <div className="flex flex-row items-center justify-center w-[85vw] sm:w-auto">
            <hr className="w-full" />
            <div className="bg-black/[50%] p-2 rounded-full">&</div>
            <hr className="w-full" />
          </div>
          <article className="mr-auto">
            <h1 className="color-azul font-bold text-xl mb-2">VAU (MVP)</h1>
            <p>
              Desarrollando un ecosistema para potenciar las ventas en el ámbito
              digital.
            </p>
            <Link to={"https://sethor.tech"} target="_blank">
              Conoce más
            </Link>
          </article>
        </Card>
      </section>
      <section className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Proyectos</h1>
        <CarruselContainer>
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
      <Card id='contacto' className="flex flex-col col-span-3">
        <h1 className="text-3xl lg:text-4xl font-bold color-azul">
          Contactame
        </h1>
        <main className="md:grid grid-cols-2 items-start gap-5 mt-6">
          <div className="h-full flex flex-col gap-5">
            <p className="text-gray-300">
              Puedes enviarme un mensaje, ya sea para encargar un proyecto, para
              contratarme, sugerir alguna mejora o incluso saludarme. 😀
            </p>
            <div className="flex flex-row items-center gap-2 text-gray-300">
              <CiMail />
              <a target="_blank">dylanecervantes@gmail.com</a>
            </div>
            <div className="hidden md:flex items-center justify-center h-full">
              <svg
                width="150"
                height="150"
                viewBox="0 0 468 468"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_25_31)">
                  <path
                    d="M441.019 2.75C446.519 6.75 448.769 12.0833 447.769 18.75L383.77 402.75C382.937 407.583 380.271 411.333 375.771 414C373.437 415.333 370.854 416 368.021 416C366.187 416 364.187 415.583 362.021 414.75L248.773 368.5L188.274 442.25C185.274 446.083 181.191 448 176.024 448C173.858 448 172.024 447.667 170.525 447C167.358 445.833 164.816 443.875 162.9 441.125C160.983 438.375 160.025 435.333 160.025 432V344.75L376.021 80L108.776 311.25L10.0276 270.75C3.86104 268.417 0.527768 263.833 0.0277772 257C-0.30555 250.333 2.36107 245.417 8.02762 242.25L424.02 2.25C426.52 0.75 429.186 0 432.02 0C435.353 0 438.353 0.916667 441.019 2.75Z"
                    fill="#ffffff"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_25_31"
                    x="0"
                    y="0"
                    width="468"
                    height="468"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="10" dy="10" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_25_31"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_25_31"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <FormContact />
        </main>
      </Card>
      <Footer />
    </LayoutMain>
  );
}
