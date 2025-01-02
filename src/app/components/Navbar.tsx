import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { FiFeather } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineBolt } from "react-icons/md";


export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/**logo cake */}
                <FiFeather className="w-6 h-6 text-white hover:text-amber-500" />
                {/**search icons*/}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl px-3 py-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Looking for something special?"
                  />
                  <IoSearchOutline className="w-5 h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className=" flex justify-center items-center gap-2">
                <MdOutlineBolt className="w-5 h-5 text-amber-500 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                
                Hurry! Your perfect card will arrive within
                  <span className="text-orange-500"> a week. </span>
                </p>

                {/**cart icons*/}

                <FaShoppingCart className="inline-block w-8 h-8  hover:bg-amber-500 p-1 relative" />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 hover:text-amber-500"
                  src="/images/aestheticbookmark.png"
                  alt="user avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
