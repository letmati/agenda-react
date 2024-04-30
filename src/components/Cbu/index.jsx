import React, { useEffect, useRef, useState } from "react";
import regalo from "/assets/icono-regalo.svg";
import Modal from "../Modal";
import useOnScreen from "../../hooks/useOnScreen";

export default function Cbu() {
  const [isOpen, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    !rendered && isVisible && setRendered(true);
  }, [isVisible]);
  return (
    <section id="cbu" className="flex justify-center pt-10 pb-16 bg-[#c39446]">
      <article
        id="container"
        className="flex flex-col flex-wrap max-w-6xl text-center px-4"
      >
        <img
          src={regalo}
          ref={ref}
          className={`transition-opacity duration-[3000ms] ${
            rendered ? "opacity-1" : "opacity-0"
          }`}
        />
        <div
          className={`transform  ${
            rendered ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }  transition-all ease-in-out duration-[3000ms]`}
        >
          <p className="text-white mb-4">
            Si deseás realizarnos un regalo podés colaborar con nuestra Luna de
            Miel...
          </p>
          <a
            onClick={() => setOpen(true)}
            className="cursor-pointer uppercase bg-white rounded-3xl text-[#c39446] py-2.5 px-10"
          >
            Ver datos bancarios
          </a>
        </div>
      </article>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
    </section>
  );
}
