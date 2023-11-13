import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { DarkMode } from "./components/dark-mode/DarkMode";
import { Banner } from "./components/banner/Banner";
import { Info } from "./components/information/Info";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact_us/Contact";
import Cloud from "./components/Cloud/Cloud";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Info />
      <Cloud />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
