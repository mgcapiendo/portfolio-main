import "./App.css";

import { Header } from "./components/header";
import { Welcome } from "./components/welcome";
import { About } from "./components/about";
import { Education } from "./components/education";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { Projects } from "./components/projects";
import { Experience } from "./components/experiences";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

import { useRef } from "react";

function App() {
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <div>
      {/* art */}

      {/* header */}
      <Header
        contactRef={contactRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        aboutRef={aboutRef}
      />

      {/* welcome */}
      <Welcome name="Manuel" role="Full-Stack Developer" />

      {/* about */}
      <About ref={aboutRef} />

      {/* education */}
      <Education />

      {/* skills */}
      <Skills ref={skillsRef} />

      {/* summary of what i do */}
      <Summary />

      {/* projects */}
      <Projects ref={projectsRef} />

      {/* experiences */}
      <Experience ref={experienceRef} />

      {/* contact */}
      <Contact ref={contactRef} />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
