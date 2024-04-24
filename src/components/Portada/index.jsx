import React, { useState } from "react";
import logo from "/assets/logo-portada.png";
import portada from "/assets/portada.jpg";

export default function Portada() {
  const [loaded, setLoaded] = useState()

  return (
    <section
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${portada})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100svh",
      }}
    >
      <div className="fade-in-portada flex justify-center">
        <img onLoad={() => setLoaded(true)} className={`lg:w-1/4 w-4/5 transition-opacity duration-[4000ms] ${loaded ? 'opacity-1' : 'opacity-0'}`} src={logo} alt="Logo"  />
      </div>
    </section>
  );
}
