import React from 'react'
import Modal from '../../Individual/Modal/Modal'
import useModal from '../../../Hooks/useModal'
import ListProject from '../ListProjects/ListProject';
import { FormattedMessage } from 'react-intl'

export default function Modals() {

    const [ valueState_Finterest, openModal_Finterest, closeModal_Finterest ] = useModal(false);
    const [ valueState_Web3D, openModal_Web3D, closeModal_Web3D ] = useModal(false);
    const [ valueState_Curtly, openModal_Curtly, closeModal_Curtly ] = useModal(false);
    const [ valueState_WeatherApp, openModal_WeatherApp, closeModal_WeatherApp ] = useModal(false);
    const [ valueState_GownerMusic, openModal_GownerMusic, closeModal_GownerMusic ] = useModal(false);
    const [ valueState_NewTech, openModal_NewTech, closeModal_NewTech ] = useModal(false);
    const [ valueState_G_Drive, openModal_G_Drive, closeModal_G_Drive ] = useModal(false);


  return (
    <>
        <div className="flex flex-col items-center gap-10">
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
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`Finterest`}
                description={<FormattedMessage id="project.description-Finterest" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
            <Modal
                valueState={valueState_Web3D}
                closeModal={closeModal_Web3D}
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`Werb 3D`}
                description={<FormattedMessage id="project.description-Web-3D" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
            <Modal
                valueState={valueState_Curtly}
                closeModal={closeModal_Curtly}
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`Cutly`}
                description={<FormattedMessage id="project.description-cutly" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
            <Modal
                valueState={valueState_WeatherApp}
                closeModal={closeModal_WeatherApp}
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`Weather App`}
                description={<FormattedMessage id="project.description-WeatherApp" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
            <Modal
                valueState={valueState_GownerMusic}
                closeModal={closeModal_GownerMusic}
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`GownerMusic`}
                description={<FormattedMessage id="project.description-gowner-music" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
            <Modal
                valueState={valueState_NewTech}
                closeModal={closeModal_NewTech}
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`NewTech`}
                description={<FormattedMessage id="project.description-NewTech" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
            <Modal
                valueState={valueState_G_Drive}
                closeModal={closeModal_G_Drive}
                img={`https://res.cloudinary.com/dnnjctymr/image/upload/v1665600275/portafolio/Projects/web-3d_irxuuv.jpg`}
                title={`G Drive`}
                description={<FormattedMessage id="project.description-GDrive" />}
                demoLink=''
                githubLink=''
            >
                <span>CSS</span>
                <span>HTML</span>
                <span>JS</span>
                <span>PHP</span>
                <span>REACT</span>
            </Modal>
        </div>
    </>
  )
}
