import project1 from "../../Images/project1.png";
// import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import { Link } from "@chakra-ui/react";
import "./Exp.css";

function Exp() {

    return (
        <div id="Projects">
            <div className="d-flex flex-column mt-4" >
                <span className="about-me-text">My Projects</span>
                <span className="why-text-sub">Summary of Projects</span>
            </div>
            <div className="web-view ">
                <div className="proj1-container">
                    <div className="proj1-demo">
                        <div>
                            <img src={project1} alt="project1" />
                        </div>
                    </div>
                    <div className="proj1-description">
                        <h1>ChargeBee Website</h1>
                        <p>This is a Group Project made by all 5 members. We have taken reference from original website that ChargeBee Website. We have used Fontawesome , Javascript, Css and some outer dependencies for styling</p>
                        <div className="proj1-demo-btn">
                            <Link  href="https://resonant-licorice-2615de.netlify.app/" isExternal><button>See Demo</button></Link>
                            <Link  href="https://github.com/crusher8010/brawny-plough-6910" isExternal><button>Source Code</button></Link>
                        </div>
                    </div>
                </div>
                <div className="proj2-container">
                    <div className="proj2-description">
                    <h1>E-Shop Website</h1>
                    <p>Simple tried to make a e-commerce website. The website data I have taken is mock-server-api that is another repo of my mine. It is fully functional and responsive.</p>
                        <div className="proj1-demo-btn">
                            <Link  href="https://wondrous-kashata-803fb3.netlify.app/" isExternal><button>See Demo</button></Link>
                            <Link  href="https://github.com/crusher8010/rugged-selection-3273/tree/main/e-commerce" isExternal><button>Source Code</button></Link>
                        </div>
                    </div>
                    <div className="proj2-demo">
                        <div>
                            <img src={project3} alt="project2" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Exp;