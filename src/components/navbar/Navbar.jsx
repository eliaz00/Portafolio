import "../navbar/Navbar.css";
import { DarkMode } from "../dark-mode/DarkMode";
import { useState } from "react";

export function Navbar() {
  const [navbar, setNavbar] = useState("false");

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className="w-full fixed z-10">
      <div className={navbar ? "navbar active" : "navbar"}>
        <nav id="main-navbar" className="container mx-auto bg-transparent p-3">
          <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col">
            <a href="#banner">
              <p id="main-navbar__sloga" className="text-xl font-bold">
                Travel to{" "}
                <span
                  id="main-navbar__sloga-two"
                  className="text-red-600 lg:text-5xl md:text-4xl sm:text-3xl text-3xl"
                >
                  The Cloud
                </span>
              </p>
            </a>

            <div className="flex items-center justify-center">
              <ul
                id="main-navbar__texts"
                className="flex gap-6 text-black font-bold pr-0 pt-2 justify-center lg:pr-10 lg:pt-0 md:pr-14 sm:justify-center sm:pr-0"
              >
                <li>
                  <a
                    className="hover:border-b-4 border-red-500 p-1"
                    href="#information"
                  >
                    Information
                  </a>
                </li>
                <li>
                  <a
                    className="hover:border-b-4 border-red-500 p-1"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="hover:border-b-4 border-red-500 pb-1"
                    href="#contact"
                  >
                    Contact us
                  </a>
                </li>
              </ul>

              <DarkMode />

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
