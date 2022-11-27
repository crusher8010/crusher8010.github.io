import "./Home.css";

const Home = () => {
    return (
        <div className="home row justify-content-center">
           <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
                <span className="Im-text">
                    Hello, I am <span className="name-Im-text">Anirudha Mandal</span>
                </span>
                <span className="Im-text-enthusiastic py-2">Enthusiastic dev 😎</span>
                <span className="Im-text-subHeading">Knack of building applications with front and back end operations</span>
                <div className="d-flex flex-row justify-content-center mt-5 btndiv">
                    <button className="btn-hire-me">Hire me</button>
                    <button className="btn-resume-me">Get Resume</button>
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