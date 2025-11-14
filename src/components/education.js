import fau from "../fau-icon.png";
import um from "../um-icon.png";

export function Education(props) {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education">
        <h1>Florida Atlantic University</h1>
        <h3>Fall 2023 - Fall 2026</h3>
        <img src={fau} />
      </div>

      <div className="education">
        <h1>The University of Memphis</h1>
        <h3>Fall 2021 - Spring 2023</h3>
        <img src={um} />
      </div>
    </div>
  );
}

export default Education;
