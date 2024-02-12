import "../information/Info.css";
import { Html, Css3, Bootstrap, JavaScript, React, Php, Laravel, Git, Github } from "../icons/Icons";


export function Info() {
  return (
    <section id="information" className="">
      <div className="container mx-auto">


      <h2 id="information-title" className="text-center pt-28 text-6xl">
        Information
      </h2>
      <div
        id="information-main"
        className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <article className="text-center">
          <h2 id="information-main__title-my" className="text-5xl pt-14">
            About me
          </h2>
          <p id="information-text" className="lg:text-2xl md:text-2xl sm:text-xl text-xl px-2 pt-10 text-justify mx-5 font-bold">
          Hello, how are things going? I am a self taught junior full stack programmer living in Venezuela, I am dedicated to creating educational and well presentable websites.<br/><br/>
          I have a deep interest in technology, I am currently exploring the world of react js and its entire evolving ecosystem.
          </p>
          <p id="information-text-two" className="lg:text-2xl md:text-2xl sm:text-xl text-xl px-2 pt-10 text-justify mx-5 font-bold">My goal is to improve myself and learn more every day while doing what I like.</p>

        </article>
        <article id="information-main__title-skills" className="">
          <h2
            id="information-main__title-skills"
            className="text-5xl pt-14 text-center"
          >
            Skills
          </h2>
          <div
            id="information-main__skills"
            className="grid grid-cols-3 justify-items-center gap-4 pt-10 lg:px-10 md:px-10 sm:px-0 px-0"
          >
            <Html height={"80"}/>
            <Css3 height={"80"}/>
            <Bootstrap height={"80"}/>
            <JavaScript height={"80"}/>
            <React height={"80"}/>
            <Php height={"80"}/>
            <Laravel height={"80"}/>
            <Git height={"80"}/>
            <Github height={"80"}/>
          </div>
        </article>
      </div>
      </div>
    </section>
  );
}
