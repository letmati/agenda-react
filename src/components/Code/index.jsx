import React, { useEffect, useRef, useState } from "react";
import dresscode from "/assets/icono-dresscode.svg";
import useOnScreen from "../../hooks/useOnScreen";

export default function Code() {
  const [rendered, setRendered] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    !rendered && isVisible && setRendered(true);
  }, [isVisible]);
  return (
    <section id="cbu" className="flex justify-center pt-10 pb-16 bg-[#d2b360]">
      <article
        id="container"
        className="flex flex-col items-center flex-wrap max-w-6xl text-center"
      >
        <img
          src={dresscode}
          ref={ref}
          className={`w-40 transition-opacity duration-[3000ms] ${
            rendered ? "opacity-1" : "opacity-0"
          }`}
        />
        <div
          className={`transform text-white  ${
            rendered ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }  transition-all ease-in-out duration-[3000ms]`}
        >
          <h1 className="text-3xl uppercase tracking-wider">dress code</h1>
          <p className="mt-5 mb-8 font-light">Vestimenta formal, elegante</p>
        </div>
      </article>
    </section>
  );
}
