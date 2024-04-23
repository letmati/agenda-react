import React from "react";
import songs from "/src/assets/icono-canciones.svg";

export default function Music() {
  return (
    <section className="pt-20 pb-24 flex flex-col justify-center">
      <article id="container">
        <aside className="flex flex-col items-center">
          <img src={songs} className="w-40" />
          <h4 className="uppercase tracking-widest text-2xl mb-2">
            ¿QUÉ CANCIONES NO PUEDEN FALTAR?
          </h4>
          <p className="font-light mb-2">
            ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar
            en la fiesta!
          </p>
          <a className="uppercase bg-[#dab485] rounded-3xl text-white py-2.5 px-10">
            Sugerir cancion
          </a>
        </aside>
      </article>
    </section>
  );
}
