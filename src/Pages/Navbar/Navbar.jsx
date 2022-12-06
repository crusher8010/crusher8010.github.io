import "./Navbar.css";
import {useState} from "react";


function Navbar(){
  const [isMob, setIsMob] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">V-STUDIOS</h1>
      <div className={isMob ? "nav-links-mob": "nav-links"} onClick={() => setIsMob(false)}>
        <a href="#homepage" smooth><h4 className="Home">Home</h4></a>
        <a href="#aboutme" smooth><h4 className="AboutMe">About Me</h4></a>
        <a href="#resume" smooth><h4 className="Resume">Resume</h4></a>
        <a href="#Projects" smooth><h4 className="Projects">Projects</h4></a>
        <a href="#contactme" smooth><h4 className="ContactMe">Contact Me</h4></a>
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMob(!isMob)}>
        {isMob ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  )
}

export default Navbar;