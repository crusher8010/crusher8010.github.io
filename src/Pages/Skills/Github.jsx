import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import {Box} from "@chakra-ui/react"

function Github() {
    return (
        <div id="github">
            <div className="d-flex flex-column mt-5" >
                <span className="about-me-text">Github Status</span>
            </div>
            <Box className="git-calen" >
                <GitHubCalendar username="crusher8010" />
            </Box>

            <div className="git-status">
                <img src="https://camo.githubusercontent.com/34c1ba4d4cfd6af60b6ca51ce3ec736f7335fa446a6153111b2e09c94a594956/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d63727573686572383031302673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" />
                <img src="https://camo.githubusercontent.com/52370dd8f0a5bcfb6010fb4f894c7f69347e45558838d0d871550408a707fb8d/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d637275736865723830313026" alt="" />
            </div>
        </div>
    )
}

export default Github