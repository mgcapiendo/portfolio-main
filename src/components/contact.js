import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact-container" ref={ref}>
      <h1>Contact</h1>
      <div className="contact-email-form">
        <h3>Email Form</h3>
      </div>

      <div className="contact-sources">
        <h3>Linkedin</h3>
        <h3>Github</h3>
        <h3>Resume</h3>
      </div>
    </div>
  );
});

export { Contact };
