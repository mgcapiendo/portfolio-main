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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Edit src/App.js and save to reload.</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      {/* art */}

      {/* header */}
      <Header />

      {/* welcome */}
      <Welcome name="Manuel" role="Full-Stack Developer" />

      {/* about */}
      <About />

      {/* education */}
      <Education />

      {/* skills */}
      <Skills />

      {/* summary of what i do */}
      <Summary />

      {/* projects */}
      <Projects />

      {/* experiences */}
      <Experience />

      {/* contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
