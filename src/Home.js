import me from './images/me.png'
import Zoom from "react-reveal/Zoom.js";
import Fade from "react-reveal/Fade";
export default function Home() {
    return (
        <div className={"page"} id={"home"}>
            {/*Content with name, brief, and logo?*/}
            <Fade top>
                <div className={"content_container"}>
                    <div className={"content_holder"} id={"homePage"}>
                        <div className={"description"}>
                            <div className={"name"}>
                                <h4 id={"hello"}>Hello, my name is</h4>
                                <h1 id={"name"}>Nathan Coats.</h1>
                                <h2 id={"caption"}>I have a passion for coding.</h2>
                            </div>
                            <div className={"bio"}>
                                <h3 id={"bio"}>Currently studying a Masters in Software Development at the University of Strathclyde, I am an aspiring software engineer/developer highly motivated to start their career in this exciting industry.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}