import AstronautBall from "../../assets/img/astronaut-balloons.png";
import CloudDown from "../../assets/img/nubespng.png";
import "../banner/Banner.css";
import { Curriculum } from "../icons/Icons";

export function Banner() {
  return (
    <section id="banner" className="banner">
      <figure className="container mx-auto">
        <img
          id="banner-ico__astronaut"
          className="w-44 pt-12"
          src={AstronautBall}
          alt="astronaut-ballons"
        />
      </figure>
      <article id="banner-main" className="">
        <div id="banner-title" className="lg:pt-0 md:pt-10 sm:pt-10 pt-11">
          <div className="">
            <h1
              id="banner-title__welcome"
              className="text-5xl text-white drop-shadow-2xl text-center"
            >
              I am Samuel Geraldino
            </h1>
            <p
              id="banner-title__developer"
              className="text-6xl text-center drop-shadow-2xl"
            >
              junior web developer
            </p>
          </div>  
            <div className="concept concept-eight mt-6 gap-3">
              <a href="#projects-title">
              <h1 className="word text-7xl text-white">
                <div className="char f" data-content="F">
                  F
                </div>
                <div className="char a" data-content="A">
                  A
                </div>
                <div className="char l" data-content="L">
                  L
                </div>
                <div className="char l-2" data-content="L">
                  L
                </div>
                <div className="char s" data-content="S">
                  S
                </div>
              </h1>
              </a>
                <a className="hover:border-b-4 border-red-500 pb-1" href="https://drive.google.com/file/d/1nz5gDZ9TrI825tLPwfr0VUGezRq6Qdzm/view?usp=drive_link" target="_blanck">
                <i className="banner-curriculum fill-white" title="Resume">
                  <Curriculum height={"35"} />
                </i>
              </a>
            </div>
        </div>
      </article>
    </section>
  );
}
