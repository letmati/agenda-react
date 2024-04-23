import React from "react";
import dresscode from "/src/assets/icono-dresscode.svg";

export default function Code() {
  return (
    <section id="cbu" className="flex justify-center pt-10 pb-16 bg-[#a4bb8f]">
      <article
        id="container"
        className="flex flex-col items-center flex-wrap max-w-6xl text-center"
      >
        <img src={dresscode} className="w-40" />
        <div className="text-white">
          <h1 className="text-3xl uppercase tracking-wider">dress code</h1>
          <p className="mt-5 mb-8 font-light">Vestimenta formal, elegante</p>
        </div>
      </article>
    </section>
  );
}
