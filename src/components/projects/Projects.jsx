import "../projects/Projects.css";
import { Html, Css3, Bootstrap, Github, React } from "../icons/Icons";
import Cloud from "../../assets/img/nubescontraria2.png";
import Zelda from "../../assets/img/project1.png";
import TicTac from "../../assets/img/project2.png";
import Cards from "./Cards/Cards";

export function Projects() {
  return (
    <section className="container mx-auto">
      <div id="projects">
        <h2
          id="projects-title"
          className="text-center pt-28 text-6xl drop-shadow-2xl"
        >
          Projects
        </h2>

        <div
          id="projects-main"
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-3 sm:gap-3 gap-3 justify-items-center pt-20 pb-10"
        >
          <Cards
            img={Zelda}
            title={"Zelda"}
            icons={[
              <Html height={"38"} />,
              <Css3 height={"38"} />,
              <Bootstrap height={"38"} />,
            ]}
            git={<Github height={"38"} />}
            url={"https://github.com/eliaz00/Zelda"}
            urlImg={"https://world-zelda.netlify.app/"}
          >
            It is a single page website design that references the Zelda games.
          </Cards>

          <Cards
            img={TicTac}
            title={"Tic-Tac-Toe"}
            icons={[
              <Html height={"38"} />,
              <Css3 height={"38"} />,
              <React height={"38"} />,
            ]}
            git={<Github height={"38"} />}
            url={"https://github.com/eliaz00/Tic-Tac-Toe"}
            urlImg={"https://tic-tac-toe-over.netlify.app/"}
          >
            Tic-tac-toe, also known as noughts and crosses, is a
            paper-and-pencil game for two players, who take turns marking the
            spaces in a three-by-three grid with X or O.
          </Cards>

          <Cards
            img={TicTac}
            title={"Tic-Tac-Toe"}
            icons={[
              <Html height={"38"} />,
              <Css3 height={"38"} />,
              <React height={"38"} />,
            ]}
            git={<Github height={"38"} />}
            url={"https://github.com/eliaz00/Tic-Tac-Toe"}
          >
            Tic-tac-toe, also known as noughts and crosses, is a
            paper-and-pencil game for two players, who take turns marking the
            spaces in a three-by-three grid with X or O.
          </Cards>
        </div>
      </div>
    </section>
  );
}
