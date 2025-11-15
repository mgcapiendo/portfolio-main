import { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
  return (
    <div className="experience-container" ref={ref}>
      <h1>Experience</h1>
      <div className="experience">
        <h3>Experience</h3>
        <h4>Experience Description</h4>
        <h4>Experience Description</h4>
        <h4>Experience Description</h4>
      </div>

      <div className="experience">
        <h3>Experience</h3>
        <h4>Experience Description</h4>
        <h4>Experience Description</h4>
        <h4>Experience Description</h4>
      </div>

      <div className="experience">
        <h3>Experience</h3>
        <h4>Experience Description</h4>
        <h4>Experience Description</h4>
        <h4>Experience Description</h4>
      </div>
    </div>
  );
});

export { Experience };
