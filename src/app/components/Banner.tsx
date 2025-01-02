import React from "react";


export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-black to  bg-neutral-700 text-white px-6 py-12 mb-7 overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/threadcards.png"
          alt="Card Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Handcrafted Cards with Love
        </h2>
        <p className="text-lg mb-6 max-w-xl">
          Turn your emotions into beautiful keepsakes. Our customized cards are
          crafted to make your moments extra special.
        </p>
        <button
          type="button"
          className="bg-amber-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-amber-800 transition duration-300"
        >
          Explore Greeting Cards
        </button>
      </div>
    </div>
  );
}
