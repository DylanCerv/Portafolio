import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiGooglecolab, SiMongodb, SiMysql, SiReactquery } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const path = '/img/proyectos';
export const PROYECTOS = [
    {
        title: 'Cutly',
        description: 'Acortador de enlaces gratuito y sin publicidad, diseñado para garantizar la seguridad informática al eliminar anuncios riesgosos.',
        src: `${path}/curtly.webp`,
        URL: 'https://dylancerv.github.io/Cutly/',
        URL_Github: 'https://github.com/DylanCerv/Cutly',
        tools: [
            {name: 'JavaScript', icon: <RiJavascriptFill />},
            {name: 'HTML', icon: <FaHtml5 />},
            {name: 'CSS', icon: <FaCss3Alt />},
        ]
    },
    {
        title: 'Data FMovies',
        description: 'Aplicación web para mantenerte al día con los últimos estrenos de películas y series, así como conocer a sus actores más destacados.',
        src: `${path}/data-movie.webp`,
        URL: 'https://data-fmovies.vercel.app/',
        URL_Github: 'https://github.com/DylanCerv/app-movie',
        tools: [
            {name: 'React', icon: <FaReact />},
            {name: 'React Query', icon: <SiReactquery />},
            {name: 'CSS', icon: <FaCss3Alt />},
        ]
    },
    // {
    //     title: 'Web 3D',
    //     description: 'Landing page para beta de una plataforma que brinda herramientas unicas a personal que trabaja en equipo.',
    //     src: `${path}/web-3d.webp`,
    //     URL: 'https://3d-web-f.vercel.app/',
    //     URL_Github: 'https://github.com/DylanCerv/Web-3D',
    //     tools: [
    //         {name: 'JavaScript', icon: <RiJavascriptFill />},
    //         {name: 'React', icon: <FaReact />},
    //         {name: 'NodeJs', icon: <FaNodeJs />},
    //         {name: 'CSS', icon: <FaCss3Alt />},
    //         {name: 'Spline', icon: ''},
    //     ]
    // },
    {
        title: 'Pinterest',
        description: 'He desarrollado una réplica de la página de inicio de Pinterest en la que he implementado características avanzadas de diseño, navegación y manejo de la información.',
        src: `${path}/finterest.webp`,
        URL: '',
        URL_Github: 'https://github.com/DylanCerv/App-Style-Pinterest',
        tools: [
            {name: 'NodeJs', icon: <FaNodeJs />},
            {name: 'Mongodb', icon: <SiMongodb />},
            {name: 'HTML', icon: <FaHtml5 />},
            {name: 'CSS', icon: <FaCss3Alt />},
        ]
    },
    {
        title: 'Weather App',
        description: 'Aplicación meteorológica que muestra el clima futuro y cambia el fondo según las condiciones climáticas para una experiencia inmersiva.',
        src: `${path}/weather-app.webp`,
        URL: 'https://pr-weather-app.vercel.app/',
        URL_Github: 'https://github.com/DylanCerv/Weather-App',
        tools: [
            {name: 'React', icon: <FaReact />},
            {name: 'CSS', icon: <FaCss3Alt />},
        ]
    },
    // {
    //     title: 'GownerMusic',
    //     description: '(Proyecto en pausa) Red social centrada en la música, conectando artistas y sellos discográficos en busca de talento.',
    //     src: `${path}/gownermusic.webp`,
    //     URL: '',
    //     URL_Github: 'https://github.com/DylanCerv/GownerMusic-Social-Net-',
    //     tools: [
    //         {name: 'PHP', icon: <FaPhp />},
    //         {name: 'CSS', icon: <FaCss3Alt />},
    //         {name: 'HTML', icon: <FaHtml5 />},
    //         {name: 'JavaScript', icon: <RiJavascriptFill />},
    //         {name: 'Mysql', icon: <SiMysql />},
    //     ]
    // },
    {
        title: 'NewTech',
        description: 'Portal de noticias para mantenerte informado sobre eventos mundiales y hasta en rincones estrechos del mundo.',
        src: `${path}/netech.webp`,
        URL: 'https://netech.vercel.app/',
        URL_Github: 'https://github.com/DylanCerv/NeTech',
        tools: [
            {name: 'PHP', icon: <FaPhp />},
            {name: 'CSS', icon: <FaCss3Alt />},
            {name: 'HTML', icon: <FaHtml5 />},
            {name: 'JavaScript', icon: <RiJavascriptFill />},
            {name: 'Nextjs', icon: <TbBrandNextjs />},
        ]
    },
    {
        title: 'API NewTech',
        description: 'Modificación de la API de noticias para uso en producción, basada en la NEWS API con ajustes en los endpoints.',
        src: `${path}/netech-api.webp`,
        URL: '',
        URL_Github: 'https://github.com/DylanCerv/NeTech/tree/api',
        tools: [
            {name: 'PHP', icon: <FaPhp />},
        ]
    },
    {
        title: 'G Drive',
        description: 'Google Colab que facilita la manipulación de archivos en Google Drive, evitando descargas pesadas y permitiendo el manejo en la nube.',
        src: `${path}/tools-drive.webp`,
        URL: 'https://colab.research.google.com/drive/1Quwmik0rjr5XrKyRXnxaoC8M5FlWNujQ?usp=sharing',
        URL_Github: '',
        tools: [
            {name: 'Google Colab', icon: <SiGooglecolab />},
            {name: 'Python', icon: <FaPython />},
        ]
    },
]