import React from "react";
import logo from "/assets/logo-portada.png";
import portada from "/assets/portada.jpg";

export default function Portada() {
  return (
    <section
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${portada})`,
        backgroundSize: "cover",
        height: "100svh",
      }}
    >
      <div className="fade-in-portada flex justify-center">
        <img className="lg:w-1/4 w-1/2" src={logo} alt="Logo"  />
      </div>
    </section>
  );
}
