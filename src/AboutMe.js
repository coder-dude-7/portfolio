import {Component} from "react";
import Fade from "react-reveal/Fade";
import me from "./images/me.png";

export default function AboutMe() {
    return (
        <div className={"page"} id={"about_me"}>
            <Fade top>
                <div className={"content_container"}>
                    <h2>About Me</h2>
                    <div className={"content_holder"} id={"about_me"}>
                        <div className={"aboutMe_description"}>
                            THIS IS A DESCRIPTION that is fi fhagsihaigj
                        </div>
                        <img alt={"picture of me"} src={me} id={"mePNG"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}