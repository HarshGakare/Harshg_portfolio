import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, scroller } from 'react-scroll';
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import ProjectDetail from "./components/projectdetail/ProjectDetails";
import Services from "./components/services/Services";

const MainLayout = () => (
  <div>
    <Cursor />
    <section id="Homepage">
    <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
      <Services />
    </section>
    <section id="Portfolio">
          <Parallax type="portfolio" />
      </section>
    <Portfolio/>
    <section id="Contact">
      <Contact />
    </section>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
