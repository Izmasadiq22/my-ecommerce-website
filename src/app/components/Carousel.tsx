import React from "react";


export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to bg-neutral-700">
        <div className="py-4 px-2 mx-suto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-600 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/aestheticbookmark.png"
                  alt="bookmark"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />

                
                <div className="absolute inset-0 bg-gradient-to-b from-grey-500/25 to-grey-700/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Design Your Dream{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-600 ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="/images/envelop.png"
                  alt="card2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500 ease-in-out "
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-500/25 to-grey-700/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                Celebrate in Style{" "}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/images/threadcards.png"
                    alt="card3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-500/25 to-grey-700/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Crafted Just for You
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/images/IMG_20240814_174230.png"
                    alt="card4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-500/25 to-grey-700/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {" "}
                    Personalize Your Greetings{" "}
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-600 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/IMG_20240919_154030.png"
                  alt="card5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-500/25 to-grey-700/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                  Your Card, Your Story{" "}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
