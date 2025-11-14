export function Welcome(props) {
  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <h1 className="welcome-name">Hi, I am {props.name}</h1>;
      </div>

      <div className="title-container">
        <h2 className="title-name">{props.role}</h2>;
      </div>
    </div>
  );
}

export default Welcome;
