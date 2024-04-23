import React from "react";
import regalo from "/assets/icono-regalo.svg";

export default function Cbu() {
  return (
    <section id="cbu" className="flex justify-center pt-10 pb-16 bg-[#dab485]">
      <article id="container" className="flex flex-col flex-wrap max-w-6xl text-center">
        <img src={regalo} />
        <div>
          <p className="text-white mb-4">
            Si deseás realizarnos un regalo podés colaborar con nuestra Luna de
            Miel...
          </p>
          <a className="uppercase bg-white rounded-3xl text-[#dab485] py-2.5 px-10">Ver datos bancarios</a>
        </div>
      </article>
    </section>
  );
}
