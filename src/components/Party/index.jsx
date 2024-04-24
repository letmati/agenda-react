import React, { useState } from "react";
import iconoCeremonia from "/assets/icono-ceremonia.svg";
import iconoFiesta from "/assets/icono-fiesta.svg";

export default function Party() {
  return (
    <section className="ceremonia-fiesta mb-12">
      <div id="container" className="w-full px-4 mx-auto max-w-6xl">
        <div id="row" className="flex flex-col justify-center lg:flex-row">
          <div
            id="col"
            className="text-center flex flex-col items-center p-4 lg:max-w-[50%]"
          >
            <img
              src={iconoCeremonia}
              alt="Icono de la ceremonia"
              className="icon ceremonia fade-in w-40"
              style={{ opacity: 1 }}
            />
            <div class="animated divCeremonia fadeInUp">
              <h4 className="mt-4 mb-5 text-2xl tracking-widest">CEREMONIA</h4>
              <p className="mb-6 font-light">
                22 de Junio a las 19:30 hs
                <br />
                en la Parroquia Nuestra Señora de la Asunción.
                <br />
                Recibí debajo las indicaciones para llegar.
              </p>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/rAG32pn1FUPy6pTaA"
                id="btn"
                className="bg-[#d4b562] rounded-3xl py-3 lg:px-10 px-3 w-full text-white"
              >
                LLEGAR A LA CEREMONIA
              </a>
            </div>
          </div>

          <div
            id="col"
            class="text-center flex flex-col items-center p-4 lg:max-w-[50%]"
          >
            <img
              src={iconoFiesta}
              alt=""
              className="icon fiesta fade-in w-40"
            />
            <div class="animated divFiesta fadeInUp">
              <h4 className="mt-4 mb-5 text-2xl tracking-widest">FIESTA</h4>
              <p className="mb-6 font-light">
                Después de la ceremonia festejaremos en el
                <br />
                Salón de eventos Colores a las 21:00hs.
                <br />
                ¡Te esperamos!
                <br />
              </p>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/aQqgBBd9zVXLD22Q8"
                id="btn"
                className="bg-[#d4b562] rounded-3xl py-3 lg:px-10 px-3 w-full text-white inline-block"
              >
                LLEGAR A LA FIESTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
