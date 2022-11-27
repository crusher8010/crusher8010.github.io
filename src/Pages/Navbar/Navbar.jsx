import "./Navbar.css";
import {useState} from "react";

function Navbar(){
  const [isMob, setIsMob] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">V-STUDIOS</h1>
      <div className={isMob ? "nav-links-mob": "nav-links"} onClick={() => setIsMob(false)}>
        <h4 className="Home">Home</h4>
        <h4 className="AboutMe">About Me</h4>
        <h4 className="Resume">Resume</h4>
        <h4 className="Projects">Projects</h4>
        <h4 className="ContactMe">Contact Me</h4>
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMob(!isMob)}>
        {isMob ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  )
}

export default Navbar;