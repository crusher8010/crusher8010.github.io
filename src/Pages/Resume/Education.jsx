import "./Education.css";

export default function Education(){
    return (
        <>
            <div className="d-flex flex-column">
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">National Institute Of Technology Durgapur</span>
                        <span className="university-degree">Bachelor of Technology in Electrical Engineering</span>
                    </div>
                    <div>
                        <span className="year-passedout">2016-2020</span>
                    </div>
                </div>
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">Narayana Junior College Telangana</span>
                        <span className="university-degree">Higher Secondary Certificate</span>
                    </div>
                    <div>
                        <span className="year-passedout">2014-2016</span>
                    </div>
                </div>
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">C.RLY English Medium School</span>
                        <span className="university-degree">Secondary School Certificate</span>
                    </div>
                    <div>
                        <span className="year-passedout">2005-2014</span>
                    </div>
                </div>
            </div>
        </>
    )
}