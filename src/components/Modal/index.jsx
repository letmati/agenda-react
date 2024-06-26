import React from "react";
import CloseIcon from "/assets/icono-close.svg";

const data = {
  nombre: "Jonathan Emmanuel",
  apellido: "Boland",
  cbu: "0140032803503356626133",
  alias: "bodasamyjony",
  dni: "",
  banco: "Banco Provincia",
};

export default function Modal({ isOpen, onClose }) {
  const { nombre, apellido, cbu, alias, banco } = data;
  return (
    <div
      className={`transition-all z-10 flex ${
        isOpen ? "bg-opacity-50 opacity-100" : "invisible bg-opacity-0 opacity-0"
      } fixed inset-0 bg-[#dab485]  justify-center items-center`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full lg:w-3/4 md:w-5/6 h-1/3 mx-4 rounded-md p-6 relative flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex flex-col text-[#dab485]">
          <h2 className="text-2xl text-center">Datos Bancarios</h2>
          <article className="text-start h-full flex flex-col justify-center">
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>CBU: {cbu}</p>
            <p>Alias: {alias}</p>
            <p>{banco}</p>
          </article>
        </section>

        <button
          className="absolute top-4 right-4 text-[#dab485] font-bold w-6"
          onClick={onClose}
        >
          <svg
            fill="#dab485"
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 24 24"
          >
            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
