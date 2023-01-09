import { useEffect, useState } from "react";
import { useRef } from "react";


/**
 * Hook para hacer Lazy Loading
 * @param {String} distance La distancia del elemento a la cual se va a ejecutar el observador
 * @returns Objeto
 * (isNearScreen) - nos indica si el elemento esta en la pantalla
 * (fromRef) - nos da la referencia del elemento o tambien es la forma de diferenciar
 * un elemento en react por ejemplo es similar a cuando se usa "document.getElementById('id')"
 */
export default function useLazyLoading({ distance = "200px" } = {}) {
  const fromRef = useRef();
  const [isNearScreen, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        observer.disconnect();
        setShow(true);
      }
    };

    // Observador que nos ayuda a ver si el elemento esta en pantalla
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
