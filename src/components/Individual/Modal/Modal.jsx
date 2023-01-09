import React from "react";
import "./Modal.css";

export default function Modal({
  img,
  title,
  description,
  children,
  demoLink,
  githubLink,
  valueState,
  closeModal,
}) {
    
  return (
    <>
      <div className={`overLay ${!valueState ? "hidden" : ''}`}>
        <div className="containerModal">
          <div className="bg-black/80 rounded-t-[10px]">
            <img className="rounded-t-[10px] mx-auto w-auto h-auto max-h-[45vh]" src={img} alt="" />
            <div
              className="absolute top-2 right-2 p-3 cursor-pointer hover:bg-white/20 flex items-center justify-center rounded-full"
              onClick={closeModal}
              >
                <svg className="absolute" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01602 15.48L0.52002 13.984L6.50403 8.00003L0.52002 2.01602L2.01602 0.52002L8.00003 6.50403L13.984 0.52002L15.48 2.01602L9.49604 8.00003L15.48 13.984L13.984 15.48L8.00003 9.49604L2.01602 15.48Z" fill="#9F9C9C"/>
                </svg>
              {/* <img className="absolute" src="src/assets/img/Popup/Close.svg" alt="" /> */}
            </div>
          </div>
          <div className="p-2 text-center flex flex-col justify-center items-center">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-5">{children}</div>
            <div className="text-black flex gap-5 justify-center w-full mt-5">
              {demoLink &&
                <a className="botonPopup" href={demoLink} target={`_blank`}>
                  Demo
                </a>
              }
              {githubLink &&
                <a className="botonPopup" href={githubLink} target={`_blank`}>
                  GitHub
                </a>
              }
            </div>
            <div className="contentPopup flex flex-col gap-3">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
