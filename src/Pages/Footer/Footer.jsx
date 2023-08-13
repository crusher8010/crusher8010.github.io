import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footerDiv">
                <a href="#homepage" ><h3>Home</h3></a>
                <a href="#aboutme" ><h3>About Me</h3></a>
                <a href="#resume" ><h3>Resume</h3></a>
                <a href="#github" ><h3>Skills</h3></a>
                <a href="#Projects" ><h3>Projects</h3></a>
                <a href="#contactme"><h3>Contact Me</h3></a>
            </div>
            <div className="footerCopy">
                <h5>Copyright &copy;2023; Designed by <span className="footName">Anirudha Mandal</span></h5>
            </div>
        </div>
    )
}

export default Footer;