import React from "react";


const floatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Classic Designs, Modern Craftsmanship
        </h2>
        <p className=" text-white mb-4 ">
          A touch of the past, crafted for the present. Our vintage cards and
          letters are coming your way soon!
        </p>
        <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-900 transition duration-200">
          {" "}
          Order Now!
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white ">
          {" "}
          Something Vintage is Coming!
        </h3>
        <ul className="text-white">
          <li>
            {" "}
            <strong> Vintage Charm, Every Card </strong>
            Handcrafted vintage cards to make your moments timeless.
          </li>
          <br />

          <li>
            {" "}
            <strong> Letters from the Past </strong>
            Classic vintage letters that tell your story beautifully.
          </li>
          <br />

          <li>
            {" "}
            <strong> Elegant Vintage Designs </strong>
            Celebrate with cards and letters that carry a touch of nostalgia.
          </li>
          <br />

          <li>
            {" "}
            <strong> Timeless Creations </strong>
            Personalized vintage cards and letters for heartfelt expressions.
          </li>
          <br />

          <li>
            {" "}
            <strong> Aesthetic Vintage Greetings </strong>
            Unique designs that bring vintage elegance to your words
          </li>
          <br />
        </ul>
        </div>
        <div className="md: w-1/2 mt-6 md:mt-0">
        <img src ="/images/card3.png"
        alt="timeless beauty"
        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
      
      </div>
    </section>
  );
};

export default floatingImageContentBlock;
