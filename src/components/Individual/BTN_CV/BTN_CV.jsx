import React from 'react'
import { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { lanContext } from "../../../context/lanContext";
import "./BTN_CV.css"

export default function BTN_CV() {
    const data = useContext(lanContext);
    const localeFinal = data.localeFinal;

    let cv = "";
    const es_EC = "es-EC";
    const en_US = "en-US";
    

    if (localStorage.getItem('language') == undefined) {
        localStorage.setItem('language', es_EC);
    }
    if (localStorage.getItem('language') == es_EC) {
        cv = "1zQcQD8nKDsUOizXXrkLdEIaGTYZfTNWA"
    }
    if (localStorage.getItem('language') == en_US) {
        cv = "1nQMQ7JsZeqaF0rok5V3Sh6Cxt3sZMNWC"
    }

    useEffect(() => {
        if (localStorage.getItem('language') == es_EC) {
            cv = "1zQcQD8nKDsUOizXXrkLdEIaGTYZfTNWA"
        }
        if (localStorage.getItem('language') == en_US) {
            cv = "1nQMQ7JsZeqaF0rok5V3Sh6Cxt3sZMNWC"
        }
    }, [localeFinal])
  
  return (
    <>
        {cv &&
            <a className="btn_cv flex flex-row justify-center items-center p-2 gap-2 mt-5" href={`https://drive.google.com/file/d/${cv}/view?usp=share_link`} target="_BLANK">
                <div>
                    <svg className="svgPDF" viewBox="0 0 12 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14V4.5L7.5 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H10C10.5304 16 11.0391 15.7893 11.4142 15.4142C11.7893 15.0391 12 14.5304 12 14ZM7.5 3C7.5 3.39782 7.65804 3.77936 7.93934 4.06066C8.22064 4.34196 8.60218 4.5 9 4.5H11V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H7.5V3Z" />
                    <path d="M2.603 14.087C2.40809 14.009 2.25106 13.8585 2.165 13.667C1.97 13.279 2.035 12.891 2.245 12.565C2.443 12.258 2.771 11.997 3.142 11.778C3.61194 11.5115 4.10869 11.2953 4.624 11.133C5.02419 10.4136 5.37889 9.6698 5.686 8.906C5.50238 8.48877 5.35841 8.05519 5.256 7.611C5.17 7.211 5.137 6.815 5.21 6.475C5.285 6.121 5.484 5.803 5.86 5.652C6.052 5.575 6.26 5.532 6.462 5.575C6.56361 5.59663 6.65914 5.64061 6.74164 5.70374C6.82414 5.76687 6.89156 5.84758 6.939 5.94C7.027 6.104 7.059 6.296 7.066 6.478C7.073 6.666 7.054 6.874 7.019 7.092C6.935 7.602 6.749 8.226 6.499 8.886C6.77489 9.47602 7.10286 10.0403 7.479 10.572C7.9241 10.5368 8.37178 10.5536 8.813 10.622C9.177 10.688 9.547 10.817 9.773 11.087C9.893 11.231 9.966 11.407 9.973 11.605C9.98 11.797 9.926 11.987 9.835 12.168C9.75618 12.3357 9.63396 12.4794 9.481 12.584C9.32981 12.6826 9.1513 12.7309 8.971 12.722C8.64 12.708 8.317 12.526 8.038 12.305C7.69874 12.0245 7.39305 11.7057 7.127 11.355C6.45076 11.4317 5.78253 11.5676 5.13 11.761C4.83118 12.291 4.49007 12.7959 4.11 13.271C3.818 13.621 3.501 13.927 3.183 14.058C3.00029 14.1407 2.79305 14.151 2.603 14.087V14.087ZM3.982 12.186C3.816 12.262 3.662 12.342 3.523 12.424C3.195 12.618 2.982 12.807 2.876 12.971C2.782 13.116 2.78 13.221 2.836 13.332C2.846 13.354 2.856 13.368 2.862 13.376C2.87393 13.3728 2.88563 13.3688 2.897 13.364C3.034 13.308 3.252 13.129 3.532 12.792C3.69125 12.597 3.84141 12.3948 3.982 12.186V12.186ZM5.622 10.856C5.95593 10.7781 6.29287 10.7137 6.632 10.663C6.44992 10.3844 6.27977 10.0981 6.122 9.805C5.96515 10.1596 5.79842 10.5097 5.622 10.855V10.856ZM8.068 11.306C8.218 11.469 8.364 11.606 8.503 11.716C8.743 11.906 8.91 11.969 9.001 11.972C9.02537 11.9752 9.05008 11.9699 9.071 11.957C9.1126 11.9241 9.14499 11.8811 9.165 11.832C9.20056 11.7711 9.2208 11.7025 9.224 11.632C9.22343 11.6085 9.21416 11.5861 9.198 11.569C9.146 11.507 8.998 11.417 8.68 11.36C8.47773 11.3262 8.27308 11.3084 8.068 11.307V11.306ZM6.078 7.8C6.16216 7.52852 6.22897 7.25196 6.278 6.972C6.309 6.784 6.321 6.629 6.316 6.507C6.31628 6.43969 6.30547 6.3728 6.284 6.309C6.23398 6.31519 6.18513 6.32867 6.139 6.349C6.052 6.384 5.981 6.455 5.943 6.632C5.903 6.824 5.913 7.101 5.989 7.454C6.013 7.565 6.043 7.681 6.079 7.8H6.078Z"/>
                    </svg>
                </div>
                <div className="text-white">CV - <FormattedMessage id="home.cv" /></div>
            </a>
        }
    </>
  )
}
