import React, { useState } from "react";

const items = [
  "/src/assets/1.jpg",
  "/src/assets/3.jpg",
  "/src/assets/4.jpg",
  "/src/assets/6.jpg",
]

const itemsWide = [
  "/src/assets/2.jpg",
  "/src/assets/5.jpg",
]

export default function Gallery() {
  const [items2] = useState([2, 5])
  return (
    <section className="flex flex-col items-center pb-14">
      <h1 className="mb-16 text-2xl font-normal tracking-widest">
        NOSOTROS...
      </h1>

      <article id="container" className="lg:max-w-6xl flex flex-col lg:flex-col">
        <div id="row" className="flex flex-wrap items-center justify-center lg:flex-row mb-1 ">
          {items &&
            items.map((item, index) => (
              <div id="item" className="m-1 w-48 h-48" key={index}>
                <a>
                  <img src={`/agenda-react/${item}`} className="max-w-full rounded-lg" />
                </a>
              </div>
            ))}
        </div>

        <div id="row" className="flex flex-col lg:flex-row mx-2">
          {itemsWide &&
            itemsWide.map((item, index) => (
              <div id="item" className="m-1 lg:w-96 lg:my-0 lg:mx-auto" key={index}>
                <a>
                  <img src={`/agenda-react/${item}`} className="max-w-full h-72 rounded-lg" />
                </a>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}
