import React, { createContext, useEffect } from "react";
import { useState } from "react";
import MensajesEspanol from "./../JSON/lan/es-EC.json";
import MensajesIngles from "./../JSON/lan/en-US.json";
import { IntlProvider } from "react-intl";

export const lanContext = createContext();

export default function LanContextProvider(props) {
  let Mensajes = "";
  let Locale = "";
  const nameLocalStorageLanguage = "language";
  const es_EC = "es-EC";
  const en_US = "en-US";
  const language = localStorage.getItem(nameLocalStorageLanguage);
  
  const [mensaje, setMensaje] = useState(Mensajes);
  const [locale, setLocale] = useState(Locale);
  

  useEffect(() => {
    if (language) {
      Locale = language;

      switch (language) {
        case es_EC:
          setMensaje(MensajesEspanol);
          setLocale(es_EC);
          break;
        case en_US:
          setMensaje(MensajesIngles);
          setLocale(en_US);
          break;
        default:
          setMensaje(MensajesEspanol);
          setLocale(es_EC);
          break;
      }
    } else {
      Mensajes = MensajesEspanol;
      Locale = es_EC;
      localStorage.setItem(nameLocalStorageLanguage, es_EC);
    }
  },[])


  /**
   * Cambia el valor del local storage al idioma que se necesita cambiar
   * @param {String} lenguaje Es el idioma al que va a cambiar el texto, (es-EC, en-US, es-MX, etc...)
   */
  const changeLanguage = (lenguaje) => {
    if (lenguaje) {
      switch (lenguaje) {
        case es_EC:
          setMensaje(MensajesEspanol);
          setLocale(es_EC);
          localStorage.setItem(nameLocalStorageLanguage, es_EC);
          break;
        case en_US:
          setMensaje(MensajesIngles);
          setLocale(en_US);
          localStorage.setItem(nameLocalStorageLanguage, en_US);
          break;
        default:
          setMensaje(MensajesEspanol);
          setLocale(es_EC);
          localStorage.setItem(nameLocalStorageLanguage, es_EC);
          break;
      }
    }
  };

  const localeFinal = locale ? locale : es_EC

  return (
    <lanContext.Provider value={{ changeLanguage, localeFinal }}>
      <IntlProvider locale={localeFinal} messages={mensaje ? mensaje : MensajesEspanol}>
        {props.children}
      </IntlProvider>
    </lanContext.Provider>
  );
}
