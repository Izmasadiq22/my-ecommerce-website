import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mz-[-1px] bg-amber-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold bg-amber-500">
              Step:1 Type a theme or occasion{" "}
            </h6>
            <p className="text-xs text-white ">
              Create memories that last forever. Design your own card and make
              your loved ones smile!
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mz-[-1px] bg-amber-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold bg-amber-500">
              Step:2 Customise Your Order{" "}
            </h6>
            <p className="text-xs text-white ">
              Add a personal touch to your greetings. Explore our collection of
              customizable cards for every celebration
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mz-[-1px] bg-amber-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold bg-amber-500">
              Step:3 Place Your Order Now!{" "}
            </h6>
            <p className="text-xs text-white">
             Place your order today and bring your ideas to life
              with our beautifully personalized cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
