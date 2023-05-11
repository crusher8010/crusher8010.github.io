import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import { Box } from "@chakra-ui/react"

function Github() {
    const techs = [
        {
            id: 1,
            src: "https://img.freepik.com/free-icon/html_318-155621.jpg?w=2000",
            title: "HTML",
            // style: "shadow-orange-500",
        },
        {
            id: 2,
            src: "https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667",
            title: "CSS",
            // style: "shadow-blue-500",
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/computer-know-how/image/upload/c_fill,g_auto,w_848,h_544,dpr_2/f_auto,q_auto/v1586880081/JavaScript-logo.png?_i=AA",
            title: "JavaScript",
            // style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            title: "React",
            // style: "shadow-blue-600",
        },
        {
            id: 5,
            src: "https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png",
            title: "Chakra-UI",
            // style: "shadow-sky-400",
        },
        {
            id: 6,
            src: "https://ijs.gallerycdn.vsassets.io/extensions/ijs/reactnextjssnippets/1.6.0/1604011628777/Microsoft.VisualStudio.Services.Icons.Default",
            title: "Next JS",
            // style: "shadow-white",
        },
        {
            id: 7,
            src: "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
            title: "Redux",
            // style: "shadow-pink-400",
        },
        {
            id: 8,
            src: "data:image/png;base64,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",
            title: "GitHub",
            // style: "shadow-gray-400",
        },
    ];

    const tools = [
        { id: 1, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png", title: "VS Code" },
        { id: 2, src: "data:image/png;base64,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", title: "Github" },
        { id: 3, src: "https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg", title: "Netlify" },
        { id: 4, src: "https://www.sublimehq.com/images/sublime_text.png", title: "Sublime Text" },
        { id: 5, src: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", title: "Vercel" },
        { id: 6, src: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png", title: 'MongoDB' }
    ]

    return (
        <div id="github">
            <div className="d-flex flex-column mt-5" >
                <span className="about-me-text">Skills</span>
                <span className="why-text-sub">My skills details</span>
            </div>

            <h1 className="programingskills-heading">Programing Skills</h1>
            <div className="skills-grid">
                {techs.map(({ id, src, title }) => (
                    <div key={id} className={'skills-tag'}>
                        <img style={{ width: "120px", height: "120px" }} src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>

            <h1 className="programingskills-heading">Tools Used</h1>
            <div className="skills-grid">
                {tools.map(({ id, src, title }) => (
                    <div key={id} className={'skills-tag'}>
                        <img style={{ width: "120px", height: "120px" }} src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>

            <h1 className="programingskills-heading">Github Status</h1>
            <Box className="git-calen" >
                <GitHubCalendar style={{ margin: "auto" }} fontSize={20} username="crusher8010" />
            </Box>

            <div className="git-status">
                <img src="https://camo.githubusercontent.com/34c1ba4d4cfd6af60b6ca51ce3ec736f7335fa446a6153111b2e09c94a594956/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d63727573686572383031302673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" />
                <img src="https://camo.githubusercontent.com/52370dd8f0a5bcfb6010fb4f894c7f69347e45558838d0d871550408a707fb8d/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d637275736865723830313026" alt="" />
            </div>
        </div>
    )
}

export default Github