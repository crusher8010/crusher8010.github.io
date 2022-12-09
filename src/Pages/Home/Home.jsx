import "./Home.css";
import { Link } from "@chakra-ui/react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Home = () => {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Enthusiastic dev 😎", "Full Stack Developer 💻", "Mern Stack Developer 📚"],
            startDelay: 0,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            autoInsertCss: true,
            cursorChar: "|",
        });

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <div className="home row justify-content-center" id="homepage">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex flex-column justify-content-center Im-text-section">
                    <span className="profile-links">
                        <Link href="https://github.com/crusher8010" isExternal><i className="fa-brands fa-github"></i></Link>
                        <Link href="https://www.linkedin.com/in/anirudha-mandal-b3ab5a18a/" isExternal><i className="fa-brands fa-linkedin"></i></Link>
                    </span>
                    <span className="Im-text">
                        Hello, I am <span className="name-Im-text">Anirudha Mandal</span>
                    </span>
                    <span className="Im-text-enthusiastic py-2" style={{ minHeight: "75px" }} ref={el}></span>
                    <span className="Im-text-subHeading">Knack of building applications with front and back end operations</span>
                    <div className="d-flex flex-row justify-content-center mt-5 btndiv">
                        <Link href="#contactme"><button className="btn-hire-me">Hire me</button></Link>
                        <Link href="Anirudha.pdf" download={"resume Anirudha.pdf"}><button className="btn-resume-me">Get Resume</button></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex justify-content-center outerdiv">
                    <img className="img-fluid custom-img" src="https://avatars.githubusercontent.com/u/107460084?v=4" alt="AniImage" />
                </div>
            </div>
        </div>
    )
}

export default Home;