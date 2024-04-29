import React, { useState } from "react";

const items = ["assets/1.jpg", "assets/3.jpg", "assets/4.jpg", "assets/6.jpg"];
const itemsWide = ["assets/2.jpg", "assets/5.jpg"];

export default function Gallery() {
  const [isMobile] = useState(true);

  return (
    <section className="flex flex-col items-center pb-14">
      <h1 className="mb-16 text-2xl font-normal tracking-widest">
        NOSOTROS...
      </h1>

      <article
        id="container"
        className="lg:max-w-6xl min-w-24 flex flex-col lg:flex-col"
      >
        {isMobile && (
          <>
            <div id="mobile" className="flex mb-2 mx-2 gap-2 lg:flex-row">
              {items &&
                items.slice(0, 2).map((item, index) => (
                  <div id="item" className="" key={index}>
                    <a onClick={() => handleOpenImage(index)}>
                      <img
                        src={`/agenda-react/${item}`}
                        className="h-48 rounded-xl"
                      />
                    </a>
                  </div>
                ))}
            </div>

            <div id="mobile" className="flex mb-2 mx-2 gap-2 lg:flex-row">
              {items &&
                items.slice(2).map((item, index) => (
                  <div id="item" className="" key={index}>
                    <a onClick={() => handleOpenImage(index)}>
                      <img
                        src={`/agenda-react/${item}`}
                        className="h-48 rounded-xl"
                      />
                    </a>
                  </div>
                ))}
            </div>

            <div id="row" className="flex flex-col lg:flex-row">
              {itemsWide &&
                itemsWide.map((item, index) => (
                  <div
                    id="item"
                    className="mx-2 mb-2 lg:w-96 lg:my-0 lg:mx-auto"
                    key={index}
                  >
                    <a>
                      <img
                        src={`/agenda-react/${item}`}
                        className="rounded-xl h-48"
                      />
                    </a>
                  </div>
                ))}
            </div>
          </>
        )}
      </article>
    </section>
  );
}
