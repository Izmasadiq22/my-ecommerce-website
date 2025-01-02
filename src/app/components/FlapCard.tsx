import React from "react";

const products = [
  {
    id: 1,
    title: "Card",
    category: "Booklet",
    price: "$7.20",
    imgUrl: "/images/puncard5.png",
    bgColor: "bg-amber-700",
  },
  {
    id: 2,
    title: "Card",
    category: "Fun Fold",
    price: "$7.20",
    imgUrl: "/images/decent.png",
    bgColor: "bg-amber-700",
  },
  {
    id: 3,
    title: "Card",
    category: "Vintage Flap Greetings",
    price: "$7.20",
    imgUrl: "/images/mylittlething1.png",
    bgColor: "bg-amber-700",
  },
];
export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group`}
          style={{ width: "300px", height: "300px" }} // Equal card size
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative p-8 px-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img
              className="relative w-full h-full object-cover"
              src={product.imgUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
