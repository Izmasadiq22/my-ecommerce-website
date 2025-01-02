import React from "react";


export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-800 font-medium bg-gradient-to-r from-black bg-neutral-700">
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            Home
          </a>
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            About
          </a>
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            Delivery
          </a>
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <a href="https://www.instagram.com/artistic__journey_/profilecard/?igsh=Z2g4cWhudWNnaThh" target="blank" rel="nofollow noopener">
            <img
              src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
              alt="instagram logo"
            />
          </a>

          <a href="https://www.youtube.com/@Artistic_Journeyy" target="blank" rel="nofollow noopener">
            <img
              src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
              alt="youtube logo"
            />
          </a>
        </div>
        <p className="text-center hover:text-cyan-500 text-amber-600 font-medium mb-8">
          {" "}
          Im Izma, a passionate artist creating unique, custom art with love and care{" "}
        </p>
        <br />
        <br />
        <br/>
      </footer>
    </div>
  );
}
