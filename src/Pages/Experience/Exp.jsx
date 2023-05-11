import project1 from "../../Images/project1.png";
import project3 from "../../Images/project3.png";
import project4 from '../../Images/Project4.png';
import project5 from '../../Images/Project5.png';
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
                <div className="project-container">
                    <div className="proj-cont1">
                        <h1 style={{ fontSize: "30px", fontWeight: "600", textAlign: "center", marginBottom: "10px", color: "#fff000" }}>ChargeBee Website Clone</h1>
                        <img style={{ width: "100%", height: "250px", margin: "auto", borderRadius: "10px" }} src={project1} alt="proj1" />
                        <div className="proj-tools">
                            <h2 className="tools-specs" >HTML</h2>
                            <h2 className="tools-specs">CSS</h2>
                            <h2 className="tools-specs">JavaScript</h2>
                        </div>
                        <h4 style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}>Summary:</h4>
                        <h5 style={{ fontSize: "18px", marginTop: "10px" }}>This is a Group Project made by all 5 members. We have taken reference from original website that Chargebee.com. In this project I have made home page and responsiveness of the navbar and Homepage. I have also used some css animations.</h5>
                        <div className=" toolbtndiv">
                            <Link href="https://github.com/crusher8010/Chargebee-Website-Clone" isExternal><button className="btn-sourcecode">View SourceCode</button></Link>
                            <Link href="https://resonant-licorice-2615de.netlify.app/" isExternal><button className="btn-getdemo">Get Demo</button></Link>
                        </div>
                    </div>
                    <div className="proj-cont1">
                        <h1 style={{ fontSize: "30px", fontWeight: "600", textAlign: "center", marginBottom: "10px", color: "#fff000" }}>E-Shop Website</h1>
                        <img style={{ width: "100%", height: "250px", margin: "auto", borderRadius: "10px" }} src={project3} alt="proj1" />
                        <div className="proj-tools">
                            <h2 className="tools-specs" >ReactJS</h2>
                            <h2 className="tools-specs">Render.com</h2>
                            <h2 className="tools-specs">JavaScript</h2>
                            <h2 className="tools-specs">Chakra-UI</h2>
                            <h2 className="tools-specs">React-slick</h2>
                        </div>
                        <h4 style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}>Summary:</h4>
                        <h5 style={{ fontSize: "18px", marginTop: "10px" }}>This is a Fashion E-commerce Website. In this website I have shown complete working cart functionality. I have also made Admin side where you can see the customers list and do crud operations there.</h5>
                        <div className=" toolbtndiv">
                            <Link href="https://github.com/crusher8010/E-shop-e-commerce" isExternal><button className="btn-sourcecode">View SourceCode</button></Link>
                            <Link href="https://e-commerce-liart-chi.vercel.app/" isExternal><button className="btn-getdemo">Get Demo</button></Link>
                        </div>
                    </div>
                </div>
                <div className="project-container2">
                    <div className="proj-cont1">
                        <h1 style={{ fontSize: "30px", fontWeight: "600", textAlign: "center", marginBottom: "10px", color: "#fff000" }}>Weather Forecast App</h1>
                        <img style={{ width: "100%", height: "250px", margin: "auto", borderRadius: "10px" }} src={project4} alt="proj1" />
                        <div className="proj-tools">
                            <h2 className="tools-specs" >HTML</h2>
                            <h2 className="tools-specs">CSS</h2>
                            <h2 className="tools-specs">JavaScript</h2>
                        </div>
                        <h4 style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}>Summary:</h4>
                        <h5 style={{ fontSize: "18px", marginTop: "10px" }}>This is an Individual Project where you are able to see weather forecast of different location. This Website will also give next-four days weather report and whole day report.</h5>
                        <div className=" toolbtndiv">
                            <Link href="https://github.com/crusher8010/Weather-App" isExternal><button className="btn-sourcecode">View SourceCode</button></Link>
                            <Link href="https://illustrious-syrniki-360eaa.netlify.app/" isExternal><button className="btn-getdemo">Get Demo</button></Link>
                        </div>
                    </div>
                    <div className="proj-cont1">
                        <h1 style={{ fontSize: "30px", fontWeight: "600", textAlign: "center", marginBottom: "10px", color: "#fff000" }}>Zee App</h1>
                        <img style={{ width: "100%", height: "250px", margin: "auto", borderRadius: "10px" }} src={project5} alt="proj1" />
                        <div className="proj-tools">
                            <h2 className="tools-specs" >ReactJS</h2>
                            <h2 className="tools-specs">JavaScript</h2>
                            <h2 className="tools-specs">Chakra-UI</h2>
                            <h2 className="tools-specs">Firebase</h2>
                            <h2 className="tools-specs">Render.com</h2>
                            <h2 className="tools-specs">Carousel</h2>
                        </div>
                        <h4 style={{ fontSize: "25px", marginTop: "10px", fontWeight: "400" }}>Summary:</h4>
                        <h5 style={{ fontSize: "18px", marginTop: "10px" }}>This is a Collabrative-Project where I have made the home and Demo page. In Home page you will be adle to see various Entertainment Category where if you click on trailer button you can see demo of that particular show.</h5>
                        <div className=" toolbtndiv">
                            <Link href="https://github.com/rittik24/vestal-oil-7361/tree/main/zee" isExternal><button className="btn-sourcecode">View SourceCode</button></Link>
                            <Link href="https://kaleidoscopic-alpaca-f60e4a.netlify.app/" isExternal><button className="btn-getdemo">Get Demo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exp;