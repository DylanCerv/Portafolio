import React from "react";
import "./Projects.css";
import CardProject from "../../Individual/CardProject/CardProject";
import { Link } from "react-router-dom";
import Modals from "../../Complejo/Modals/Modals";
import { FormattedMessage } from 'react-intl'
import ListProject from "../../Complejo/ListProjects/ListProject";
import Modal from "../../Individual/Modal/Modal";
import useModal from "../../../Hooks/useModal";
import { Img_Projects } from "../../../JSON/Img/Img";
import useLazyLoading from "../../../Hooks/useLazyLoading";

export default function Projects() {

  const { isNearScreen, fromRef } = useLazyLoading({distance: '200px'});

  const [ valueState_Finterest, openModal_Finterest, closeModal_Finterest ] = useModal(false);
  const [ valueState_Web3D, openModal_Web3D, closeModal_Web3D ] = useModal(false);
  const [ valueState_Curtly, openModal_Curtly, closeModal_Curtly ] = useModal(false);
  const [ valueState_WeatherApp, openModal_WeatherApp, closeModal_WeatherApp ] = useModal(false);
  const [ valueState_GownerMusic, openModal_GownerMusic, closeModal_GownerMusic ] = useModal(false);
  const [ valueState_NewTech, openModal_NewTech, closeModal_NewTech ] = useModal(false);
  const [ valueState_G_Drive, openModal_G_Drive, closeModal_G_Drive ] = useModal(false);

  const {
    Finterest_img1, Finterest_img2,
    Web_3D_img1, Web_3D_img2,
    Curtly_img1, Curtly_img2,
    Weather_App_img1, Weather_App_img2,
    Gowner_Music_img1, Gowner_Music_img2,
    NewTech_img1, NewTech_img2,
    G_Drive_img1, G_Drive_img2,
  } = Img_Projects;

  const polygon = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208560/portafolio/assets/img/Figures/polygon_hs8yjj.svg";

  return (
    <section className="py-[5rem] !p-0" id="project" ref={fromRef}>
        {isNearScreen &&
        <>
            <div className="bg-gradient-project section imgFigura px-[16px] py-36 md:py-30">
            <div className="figures">
                <img className="absolute top-20" src={polygon} alt="" />
                <img className="absolute right-10 w-[5%]" src={polygon} alt="" />
                <img className="absolute -top-[5%] right-[20%] w-[25%] md:-top-[15%]" src={polygon} alt="" />
                <img className="absolute bottom-20" src={polygon} alt="" />
                <img className="absolute top-[30%] -left-[2%] w-[15%]" src={polygon} alt="" />
                <img className="absolute bottom-[30%] right-[40%]" src={polygon} alt="" />
                <img className="absolute bottom-[10%] right-5" src={polygon} alt="" />
                <img className="absolute bottom-[45%] right-5 w-[20%]" src={polygon} alt="" />
                <img className="absolute left-[40%] top-[30%]" src={polygon} alt="" />
            </div>
            <h1 className="uppercase text-white">
            <FormattedMessage id="project.title-general" />
            </h1>
            <p className=" text-white mb-10">
            <FormattedMessage id="project.description-general" />
            </p>
            <ListProject
                openModalFinterest = {openModal_Finterest}
                openModalWeb3D = {openModal_Web3D}
                openModal_Curtly = {openModal_Curtly}
                openModal_WeatherApp = {openModal_WeatherApp}
                openModal_GownerMusic = {openModal_GownerMusic}
                openModal_NewTech = {openModal_NewTech}
                openModal_G_Drive = {openModal_G_Drive}
            />
            </div>
            <div>
                <Modal
                    valueState={valueState_Finterest}
                    closeModal={closeModal_Finterest}
                    img={Finterest_img1}
                    title={`Finterest`}
                    description={<FormattedMessage id="project.description-Finterest" />}
                    demoLink=''
                    githubLink='https://github.com/DylanCerv/App-Style-Pinterest'
                >
                    <span>JavaScript -</span>
                    <span>NodeJS -</span>
                    <span>MongDB -</span>
                    <span>HTML -</span>
                    <span>CSS</span>
                </Modal>
                <Modal
                    valueState={valueState_Web3D}
                    closeModal={closeModal_Web3D}
                    img={Web_3D_img1}
                    title={`Werb 3D`}
                    description={<FormattedMessage id="project.description-Web-3D" />}
                    demoLink='https://3d-web-f.vercel.app/'
                    githubLink='https://github.com/DylanCerv/Web-3D'
                >
                    <span>JavaScript -</span>
                    <span>NodeJS -</span>
                    <span>React -</span>
                    <span>Spline -</span>
                    <span>HTML -</span>
                    <span>CSS</span>
                </Modal>
                <Modal
                    valueState={valueState_Curtly}
                    closeModal={closeModal_Curtly}
                    img={Curtly_img1}
                    title={`Cutly`}
                    description={<FormattedMessage id="project.description-cutly" />}
                    demoLink='https://dylancerv.github.io/Cutly/'
                    githubLink='https://github.com/DylanCerv/Cutly'
                >
                    <span>JavaScript -</span>
                    <span>HTML -</span>
                    <span>CSS</span>
                </Modal>
                <Modal
                    valueState={valueState_WeatherApp}
                    closeModal={closeModal_WeatherApp}
                    img={Weather_App_img1}
                    title={`Weather App`}
                    description={<FormattedMessage id="project.description-WeatherApp" />}
                    demoLink='https://pr-weather-app.vercel.app/'
                    githubLink='https://github.com/DylanCerv/Weather-App'
                >
                    <span>JavaScript -</span>
                    <span>HTML -</span>
                    <span>CSS -</span>
                    <span>React</span>
                </Modal>
                <Modal
                    valueState={valueState_GownerMusic}
                    closeModal={closeModal_GownerMusic}
                    img={Gowner_Music_img1}
                    title={`GownerMusic`}
                    description={<FormattedMessage id="project.description-gowner-music" />}
                    demoLink='https://portafoliodylangowner.000webhostapp.com/GownerMusic/'
                    githubLink='https://github.com/DylanCerv/GownerMusic-Social-Net-'
                >
                    <span>PHP -</span>
                    <span>MySQL -</span>
                    <span>JS -</span>
                    <span>HTML -</span>
                    <span>CSS</span>
                </Modal>
                <Modal
                    valueState={valueState_NewTech}
                    closeModal={closeModal_NewTech}
                    img={NewTech_img1}
                    title={`NewTech`}
                    description={<FormattedMessage id="project.description-NewTech" />}
                    demoLink='https://portafoliodylangowner.000webhostapp.com/NeTech/'
                    githubLink='https://github.com/DylanCerv/NeTech'
                >
                    <span>PHP -</span>
                    <span>JS -</span>
                    <span>CSS -</span>
                    <span>HTML</span>
                </Modal>
                <Modal
                    valueState={valueState_G_Drive}
                    closeModal={closeModal_G_Drive}
                    img={G_Drive_img1}
                    title={`G Drive`}
                    description={<FormattedMessage id="project.description-GDrive" />}
                    demoLink='https://colab.research.google.com/drive/1Quwmik0rjr5XrKyRXnxaoC8M5FlWNujQ?usp=sharing'
                    githubLink=''
                >
                    <span>Python -</span>
                    <span>Google Colab</span>
                </Modal>
            </div>
        </>
        }

    </section>
  );
}
