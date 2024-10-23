import { FaAngular, FaAws, FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaSass, FaSymfony, FaTrello } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiComposer, SiExpress, SiFirebase, SiGooglecloud, SiGooglecolab, SiMongodb, SiMysql, SiNumpy, SiPostman, SiSwagger, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";




export const SKILLS_TECHNICAL = [
    {
        title: "Frontend Stack",
        skills: [
            {name: "React", icon: <FaReact />},
            // {name: "Angular", icon: <FaAngular />},
            {name: "JavaScript", icon: <RiJavascriptFill />},
            {name: "TypeScript", icon: <BiLogoTypescript />},
            {name: "SASS", icon: <FaSass />},
            {name: "TailwindCSS", icon: <SiTailwindcss />},
            {name: "HTML", icon: <FaHtml5 />},
            {name: "CSS", icon: <FaCss3Alt />},
            // {name: "Bootstrap", icon: <FaBootstrap />},
            {name: "Next.js", icon: <TbBrandNextjs />},
        ]
    },
    {
        title: "Backend Stack",
        skills: [
            {name: "NodeJS", icon: <FaNodeJs />},
            {name: "Express", icon: <SiExpress />},
            {name: "PHP", icon: <FaPhp />},
            {name: "Laravel", icon: <FaLaravel />},
            {name: "Symfony", icon: <FaSymfony />},
            {name: "AWS", icon: <FaAws />},
            // {name: "GCP", icon: <SiGooglecloud />},
            {name: "Firebase", icon: <SiFirebase />},
            {name: "MySQL", icon: <SiMysql />},
            {name: "MongoDB", icon: <SiMongodb />},
            {name: "Postman", icon: <SiPostman />},
            {name: "Python", icon: <FaPython />},
            // {name: "Swagger", icon: <SiSwagger />},
            // {name: "Composer", icon: <SiComposer />},
        ]
    },
    {
        title: "Otras Herramientas",
        skills: [
            {name: "Figma", icon: <FaFigma />},
            {name: "Trello", icon: <FaTrello />},
            {name: "Git", icon: <FaGitAlt />},
            // {name: "Github", icon: <FaGithub />},
            // {name: "Google Colab", icon: <SiGooglecolab />},
            // {name: "Numpy", icon: <SiNumpy />},
        ]
    },
]