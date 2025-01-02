"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Buy 2, Get 1 Free",
      description:
        "Choose any two cards and get a third one absolutely free! Perfect for spreading love on multiple occasions",
    },

    {
      title: "Flat 20% Off on Orders Above $50",
      description:
        "Save big when you shop more! Enjoy 20% off on all orders over $50—your celebrations just got more affordable",
    },

    {
      title: "Personalized Combo Offer",
      description:
        "Get a pack of 5 customizable products for just $25. Personalize each one to match your unique style!",
    },

    {
      title: "Limited-Time Festival Special",
      description:
        "Celebrate the season with 30% off on all holiday-themed cards. Offer valid until [insert date]—shop now!",
    },


  ];
  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center hover:bg-grey-300 transion duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-amber-700">
                {" "}
                {offer.title}
              </h3>
              <p className="text-grey-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
