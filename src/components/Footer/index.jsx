import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";

export default function Footer() {
  const [rendered, setRendered] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    !rendered && isVisible && setRendered(true);
  }, [isVisible]);
  return (
    <section className="flex justify-center items-center h-56 bg-[#d2b360]">
      <div
        ref={ref}
        className={`text-center text-white w-4/5   ${
          rendered ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        } transform  transition-all ease-in-out duration-[3000ms]`}
      >
        <h2 className="uppercase">
          ¡Gracias por acompañarnos en este momento tan importante!
        </h2>
      </div>
    </section>
  );
}
