import "./Resume.css";
import {useState} from "react";
import Education from "./Education";
// import Programing from "./Programing";
import Projects from "./Projects";
import Training from "./Training";

function Resume(){
    const [education, setEducation] = useState(true);
    const [trainingExp, setTrainingExp] = useState(false);
    // const [programings, setProgramings] = useState(false);
    const [projects, setProjects] = useState(false);

    const setAllFalse = () => {
        setEducation(false)
        setTrainingExp(false)
        // setProgramings(false)
        setProjects(false)
    }

    const handleState = (fn1, state1) => {
        setAllFalse();
        fn1(state1)
    }

    return (
        <div className="resume-outer-section d-flex flex-column" id="resume">
            <span className="about-me-text">Resume</span>
            <span className="why-text-sub">My formal bio details</span>
            <div className="resume-new-section row"  style={{width:"70%", marginInline:"auto"}}>
                <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row">
                    <div className="d-flex flex-column bg-new text-white">
                        <span className="icons-span"><i className="fa-solid fa-user-graduate"></i></span>
                        <span className="icons-span"><i className="fa-solid fa-landmark"></i></span>
                        {/* <span className="icons-span"><i className="fa-solid fa-code"></i></span> */}
                        <span className="icons-span"><i className="fa-solid fa-list-check"></i></span>
                    </div>
                    <div className="d-flex flex-column ">
                        <span className={education === false ? "resume-options-items": "selected resume-options-items"} onClick={() => handleState(setEducation, true)}>Education{" "}</span>
                        <span className={trainingExp === false ? "resume-options-items": "selected resume-options-items"} onClick={() => handleState(setTrainingExp, true)}>Training Experience</span>
                        {/* <span className={programings === false ? "resume-options-items": "selected resume-options-items"} onClick={() => handleState(setProgramings, true)}>Programing</span> */}
                        <span className={projects === false ? "resume-options-items": "selected resume-options-items"} onClick={() => handleState(setProjects, true)}>Projects</span>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 resume-right-section">
                    {education === true && <Education />}
                    {trainingExp === true && <Training />}
                    {/* {programings === true && <Programing />} */}
                    {projects === true && <Projects />}
                </div>
            </div>
        </div>
    )
}

export default Resume;