export function Header({
  aboutRef,
  skillsRef,
  projectsRef,
  experienceRef,
  contactRef,
}) {
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleExperienceClick = () => {
    experienceRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header-container">
      <div className="header-buttons">
        <h3>Home</h3>
        <h3 onClick={handleAboutClick}>About</h3>
        <h3 onClick={handleSkillsClick}>Skills</h3>
        <h3 onClick={handleProjectsClick}>Projects</h3>
        <h3 onClick={handleExperienceClick}>Experiences</h3>
        <h3 onClick={handleContactClick}>Contact</h3>
      </div>
    </div>
  );
}

export default Header;
