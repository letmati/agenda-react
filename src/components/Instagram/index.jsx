import React from "react";
import instagram from "/assets/icono-instagram.svg";

export default function Instagram() {
  return (
    <section id="cbu" className="flex justify-center pt-10 pb-16">
      <article
        id="container"
        className="flex flex-col items-center flex-wrap max-w-6xl text-center"
      >
        <img src={instagram} className="w-40" />
        <div>
          <h1 className="text-3xl">@beluyamador</h1>
          <p className="mt-5 mb-8 font-light">
            <br />
            ¡Preparate para nuestro gran día!
            <br />
            Ya podés seguirnos en nuestra cuenta para ver todas las novedades
            del casamiento y etiquetarnos en tus fotos y videos.
          </p>
          <a className="uppercase bg-[#dab485] rounded-3xl text-white py-2.5 px-10">
            Ver en instagram
          </a>
        </div>
      </article>
    </section>
  );
}
