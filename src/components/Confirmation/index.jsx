import React from "react";
import portada from "/assets/portada.jpg";

export default function Confirmation() {
  return (
    <section
      className="h-[600px] flex flex-col justify-center"
      style={{backgroundImage: `url(${portada})`, backgroundSize: "cover", backgroundPosition: "center"}}

    >
      <article id="container">
        <aside className="flex flex-col items-center text-center">
          <h4 className="uppercase tracking-widest text-2xl mb-2">
            Confirmación de asistencia
          </h4>
          <p className="font-light mb-2">
            Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu
            asistencia!
          </p>
          <a href="https://api.whatsapp.com/send?phone=5492216046833" className="uppercase bg-[#b09e6c] rounded-3xl text-white py-2.5 px-10">
            Confirmar asistencia
          </a>
        </aside>

        {/* <div className="flex flex-col items-center">
          <img src={calendario} className="w-40" />
          <p className="font-light mb-2">¡Agendá la fecha en tu calendario!</p>
          <a className="uppercase bg-[#dab485] rounded-3xl text-white py-2.5 px-10">
            Agendar evento
          </a>
        </div> */}
      </article>
    </section>
  );
}
