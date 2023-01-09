import { useEffect, useState } from "react";
import { Frontend, Backend, Other } from "../../../JSON/skills/skills";
import "./Skills.css";
import Tecnologia from "../../Individual/Tecnologia/Tecnologia";
import GroupStack from "../../Individual/GroupStack/GroupStack";
import { FormattedMessage } from "react-intl";
import useLazyLoading from "../../../Hooks/useLazyLoading";

export default function Skills() {
  const polygon = "https://res.cloudinary.com/dnnjctymr/image/upload/v1673208560/portafolio/assets/img/Figures/polygon_hs8yjj.svg";
  const {isNearScreen , fromRef} = useLazyLoading({distance: '200px'});
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    setFrontend(Object.values(Frontend));
    setBackend(Object.values(Backend));
    setOther(Object.values(Other));
  }, []);

  return (
    <section className="skills bg-gradient" id="skill" ref={fromRef}>
      {isNearScreen &&
        <>
          <div className="figures">
        <img className="absolute -z-[1] top-20" src={polygon} alt="" />
        <img className="absolute -z-[1] right-10 w-[5%]" src={polygon} alt="" />
        <img className="absolute -z-[1] -top-[5%] right-[20%] w-[25%] md:-top-[15%]" src={polygon} alt="" />
        <img className="absolute -z-[1] bottom-20" src={polygon} alt="" />
        <img className="absolute -z-[1] top-[30%] -left-[2%] w-[15%]" src={polygon} alt="" />
        <img className="absolute -z-[1] bottom-[30%] right-[40%]" src={polygon} alt="" />
        <img className="absolute -z-[1] bottom-[10%] right-5" src={polygon} alt="" />
        <img className="absolute -z-[1] bottom-[45%] right-5 w-[20%]" src={polygon} alt="" />
        <img className="absolute -z-[1] left-[40%] top-[30%]" src={polygon} alt="" />
          </div>
          <div className="px-[10px] py-24 md:py-20">
            <GroupStack h2="Frontend" span="Stack" colorSpan={1}>
              {frontend.map((data, index) => (
                <Tecnologia imglink={data.url} text={data.name} key={index} />
              ))}
            </GroupStack>
            <GroupStack h2="Backend" span="Stack" colorSpan={2}>
              {backend.map((data, index) => (
                <Tecnologia imglink={data.url} text={data.name} key={index} />
              ))}
            </GroupStack>
            <GroupStack 
              h2={
                <FormattedMessage 
                  id="skill.other-title"
                />
              }
              span={
                <FormattedMessage 
                  id="skill.other-tools"
                />
              }
              colorSpan={3}
            >
              {other.map((data, index) => (
                <Tecnologia imglink={data.url} text={data.name} key={index} />
              ))}
            </GroupStack>
          </div>
        </>
      }

    </section>
  );
}
