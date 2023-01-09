import React from "react";
import CardProject from "../../Individual/CardProject/CardProject";
import { Img_Projects } from "../../../JSON/Img/Img";
import useLazyLoading from "../../../Hooks/useLazyLoading";

export default function ListProject({
    openModalFinterest,
    openModalWeb3D,
    openModal_Curtly,
    openModal_GownerMusic,
    openModal_NewTech,
    openModal_G_Drive,
    openModal_WeatherApp,
}) {

  const {
    Finterest_img1, Finterest_img2,
    Web_3D_img1, Web_3D_img2,
    Curtly_img1, Curtly_img2,
    Weather_App_img1, Weather_App_img2,
    Gowner_Music_img1, Gowner_Music_img2,
    NewTech_img1, NewTech_img2,
    G_Drive_img1, G_Drive_img2,
  } = Img_Projects;

  const {isNearScreen, fromRef} = useLazyLoading({distance: '300px'});

  return (
    <>
      <div ref={fromRef}>
        {isNearScreen && 
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-10">
            <CardProject
              openModal={openModalFinterest}
              img1={Finterest_img1}
              img2={Finterest_img2}
              title="Finterest"
            />
            <CardProject
              openModal={openModalWeb3D}
              img1={Web_3D_img1}
              img2={Web_3D_img2}
              title="Web 3D"
            />
            <CardProject
              openModal={openModal_Curtly}
              img1={Curtly_img1}
              img2={Curtly_img2}
              title="Curtly"
            />
            <CardProject
              openModal={openModal_WeatherApp}
              img1={Weather_App_img1}
              img2={Weather_App_img2}
              title="Weather App"
            />
            <CardProject
              openModal={openModal_GownerMusic}
              img1={Gowner_Music_img1}
              img2={Gowner_Music_img2}
              title="Gowner Music"
            />
            <CardProject
              openModal={openModal_NewTech}
              img1={NewTech_img1}
              img2={NewTech_img2}
              title="NewTech"
            />
            <CardProject
              openModal={openModal_G_Drive}
              img1={G_Drive_img1}
              img2={G_Drive_img2}
              title="G Drive"
            />
          </div>
        }
      </div>
    </>
  );
}
