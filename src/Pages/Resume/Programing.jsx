import "./Programing.css";

function Programing(){
    const value =[
        {text: "HTML and CSS", percentage: 85, image: "https://www.pngitem.com/pimgs/m/391-3917813_html-css-icon-html-css-logo-png-transparent.png"},
        {text: "Javascript", percentage: 80, image:"https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"},
        {text: "Python", percentage: 40, image:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"},
        {text: "React JS", percentage: 80, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},
        {text: "Redux", percentage: 60, image:"https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"},
    ]

    return (
        <div>
           <div className="row">
            {value.map((item, index) => {
                return (
                    <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
                        <div style={{display:"flex", gap:"10px"}}>
                        <span><img style={{width:"40px", height: "40px"}} src={item.image} alt="logo" /></span>
                        <span className="language">{item.text}</span>
                        </div>
                        <div className="progress-some my-2">
                            <div className="progress-new " style={{width:`${item.percentage}%`}}></div>
                        </div>
                    </div>
                )
            })}
           </div>
        </div>
    )
}

export default Programing;