import React, { useState } from "react";
import img from "/src/assets/1.jpg";

export default function Gallery() {
  const [items] = useState([1, 3, 4, 6]);
  const [items2] = useState([2, 5])
  return (
    <section className="flex flex-col items-center pb-14">
      <h1 className="mb-16 text-2xl font-normal tracking-widest">
        NOSOTROS...
      </h1>

      <article id="container" className="lg:max-w-6xl flex flex-col lg:flex-col">
        <div id="row" className="flex flex-wrap items-center justify-center lg:flex-row mb-1">
          {items &&
            items.map((item) => (
              <div id="item" className="m-1 w-48 h-48" key={item}>
                <a>
                  <img src={`/src/assets/${item}.jpg`} className="max-w-full rounded-lg" />
                </a>
              </div>
            ))}
        </div>

        <div id="row" className="flex flex-col lg:flex-row mx-2">
          {items2 &&
            items2.map((item) => (
              <div id="item" className="m-1" key={item}>
                <a>
                  <img src={`/src/assets/${item}.jpg`} className="max-w-full h-72 rounded-lg" />
                </a>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}
