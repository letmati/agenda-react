import React from "react";
import Countdown from "../../components/Countdown";
import Portada from "../../components/Portada";
import Party from "../../components/Party";
import ParallaxComponent from "../../components/Parallax";
import Gallery from "../../components/Gallery";
import Cbu from "../../components/Cbu";
import Code from "../../components/Code";
import Confirmation from "../../components/Confirmation";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="font-custom">
      <ParallaxComponent>
        <Portada />
      </ParallaxComponent>
      <Countdown />
      <Party />
      <Gallery />
      <Cbu />
      <Code />
      <ParallaxComponent>
        <Confirmation />
      </ParallaxComponent>
      <Footer />
    </main>
  );
}
