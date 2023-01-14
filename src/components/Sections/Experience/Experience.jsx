import React from "react";
import "./Experience.css";
import Trabajo from "../../Individual/Trabajo/Trabajo";
import { FormattedMessage } from "react-intl";
import useLazyLoading from "../../../Hooks/useLazyLoading";

export default function Experience() {

  const { isNearScreen, fromRef } = useLazyLoading({distance: '200px'})

  return (
    <section className="imgFigura experience" id="experience" ref={fromRef}>
      {isNearScreen &&
        <>
          <h1 className="uppercase">
            <FormattedMessage id="experience.title-general" />
          </h1>
          <div className="md:grid grid-cols-2 gap-10 mt-10">
            {/* <Trabajo
              empresa="PINE"
              cargo={<FormattedMessage id="experience.position-pine" />}
              fecha="(10/2022 - ACTUAL)"
              dueño={<FormattedMessage id="experience.dueño-pine" />}
            >
              <li>
                <FormattedMessage id="experience.activities-pine1" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-pine2" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-pine3" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-pine4" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-pine5" />
              </li>
            </Trabajo> */}
            <Trabajo
              empresa="GESPRENDER"
              cargo={<FormattedMessage id="experience.position-gesprender" />}
              fecha="(03/2022 - ACTUAL)"
              dueño=""
              technologies="PHP / Symfony / React / HTML / CSS / Jquery / AJAX / MySQL / Python / Postman / Boostrap / JavaScript"
            >
              <li>
                <FormattedMessage id="experience.activities-gesprender1" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender2" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender3" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender4" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender5" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender6" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender7" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-gesprender8" />
              </li>
            </Trabajo>
            <Trabajo
              empresa="ID FOR IDEA"
              cargo={<FormattedMessage id="experience.position-id-for-idea" />}
              fecha="(11/2021 - 03/2022)"
              dueño=""
              technologies="PHP / MySQL"
            >
              <li>
                <FormattedMessage id="experience.activities-id-for-idea1" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-id-for-idea2" />
              </li>
              <li>
                <FormattedMessage id="experience.activities-id-for-idea3" />
              </li>
            </Trabajo>
          </div>
        </>
      }
    </section>
  );
}
