import React from "react";
import "../footer/Footer.css";
import { Faceebok, Twiter, Linkedin, Github, Curriculum } from "../icons/Icons";

export default function Footer() {
  return (
    <footer className="footer flex justify-center items-end">
      <div className="flex flex-col w-full">
        <h2 className="text-center text-5xl">Contacts</h2>

        <div id="networks" className=" flex my-3 justify-center">
          <ul className="flex gap-9 h-11 items-center">
            <li className="hover:border-b-4 border-red-500 pb-2">
              <a href="https://drive.google.com/file/d/1nz5gDZ9TrI825tLPwfr0VUGezRq6Qdzm/view?usp=drive_link" target="_blanck">
                <i className="ico curriculum ico-curriculum" title="Resume">
                  <Curriculum height={"34"} />
                </i>
              </a>
            </li>
            <li className="hover:border-b-4 border-red-500 pb-2">
              <a href="https://www.linkedin.com/in/samuel-elias-geraldino-perez-72568917a/" target="_blanck">
                <i className="ico linkedin ico-linkedin" title="Linkedin">
                  <Linkedin height={"34"} />
                </i>
              </a>
            </li>
            <li className="hover:border-b-4 border-red-500 pb-2">
              <a href="https://github.com/eliaz00" target="_blanck">
                <i className="ico github ico-github" title="Github">
                  <Github height={"34"} />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-700 text-center py-1">
          <h2 className="text-white">
            © Copyrigth 2023 Samueleliaz00@gmail.com - Samuel G.
          </h2>
        </div>
      </div>
    </footer>
  );
}
