import React, { useEffect } from "react";
import "./App.css";
import "./root.css";
import "bootstrap/dist/css/bootstrap.css";
import Jadoo from "./components/Jadoo.jsx";
import Hero_section from "./components/Hero_section";
import bg_top from "./assets/png/nav_bar_bg_image.png";
import best1 from "./assets/svg/best_bg_image.svg";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Sliders from "./components/Sliders";
import Section6 from "./components/Section6";
import Last_One from "./components/Last_One";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="position-relative ">
      <img className="bg_image1 w-50" src={bg_top} alt="bg_top" />
      <Jadoo />
      <Hero_section />
      <div className="overflow-hidden">
        <div className="position-relative">
          <img className="best1" src={best1} alt="best1" />
          <Container>
            <Section1 />
          </Container>
        </div>
        <Container>
          <Section2 />
          <Section3 />
          <Section4 />
          <Sliders />
        </Container>
        <div className="position-relative">
          <img className="best2" src={best1} alt="best1" />
          <Container>
            <Section6 />
          </Container>
        </div>
        <Container>
          <Last_One />
        </Container>
      </div>
    </div>
  );
}

export default App;
