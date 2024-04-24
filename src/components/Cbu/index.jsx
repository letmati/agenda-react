import React, { useState } from "react";
import regalo from "/assets/icono-regalo.svg";
import Modal from "../Modal";

export default function Cbu() {
  const [isOpen, setOpen] = useState(false)
  return (
    <section id="cbu" className="flex justify-center pt-10 pb-16 bg-[#c39446]">
      <article id="container" className="flex flex-col flex-wrap max-w-6xl text-center">
        <img src={regalo} />
        <div>
          <p className="text-white mb-4">
            Si deseás realizarnos un regalo podés colaborar con nuestra Luna de
            Miel...
          </p>
          <a onClick={() => setOpen(true)} className="cursor-pointer uppercase bg-white rounded-3xl text-[#c39446] py-2.5 px-10">Ver datos bancarios</a>
        </div>
      </article>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
    </section>
  );
}
