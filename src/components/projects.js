import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects-container" ref={ref}>
      <h1>Projects</h1>
      <div className="projects">
        <h3>Project Title</h3>
        <h4>Project Description</h4>
      </div>

      <div className="projects">
        <h3>Project Title</h3>
        <h4>Project Description</h4>
      </div>

      <div className="projects">
        <h3>Project Title</h3>
        <h4>Project Description</h4>
      </div>
    </div>
  );
});

export { Projects };
