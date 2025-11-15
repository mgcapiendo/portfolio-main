import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  return (
    <div className="skills-container" ref={ref}>
      {/* make this a map later */}
      <h1>Skills</h1>
      <div className="skills">
        <h3>skill</h3>
        <h3>skill</h3>
        <h3>skill</h3>
        <h3>skill</h3>
        <h3>skill</h3>
        <h3>skill</h3>
        <h3>skill</h3>
        <h3>skill</h3>
      </div>
    </div>
  );
});

export { Skills };
