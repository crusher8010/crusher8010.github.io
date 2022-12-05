import "./Training.css";

export default function Training(){
    return (
        <div className="work-inside-new">
            <div className="d-flex flex-column mx-2 my-2">
                <div className="d-flex flex-row justify-content-between">
                <span className="company-name">Durgapur Steel Plant</span>
                <span className="year-passedout">2019-May</span>
                </div>
            </div>
            <div className="d-flex flex-column">
                <span className="position">Trainee</span>
                <span className="description-position">
                    <ul>
                        <li>Learnt the ways of traction wheels are made in DSP and how they are going under their inspection to check if they can be used or not.</li>
                        <li>Learnt Some facts of telecommunication.</li>
                    </ul>
                </span>
            </div>
            <div className="d-flex flex-column mx-2 my-2">
                <div className="d-flex flex-row justify-content-between">
                <span className="company-name">MSME</span>
                <span className="year-passedout">2018-June</span>
                </div>
            </div>
            <div className="d-flex flex-column">
                <span className="position">Trainee</span>
                <span className="description-position">
                    <ul>
                        <li>Learnt about PLC and SCADA</li>
                        <li>Praqctical work experience with PLC and SCADA.</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}