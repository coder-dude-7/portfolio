import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

export default function Education() {

    /*const pythonJavaPopover = (
        <Popover id={"popover-basic"}>
            <Popover.Body>
                <div className={"popover_container"}>
                    <ul>
                        <li>Individual Assignments</li>
                        <li>Object Orientated Programming</li>
                    </ul>
                </div>
            </Popover.Body>
        </Popover>
    );
    const mobileApplicationPopover = (
        <Popover id={"popover-basic"}>
            <Popover.Body>
                <div className={"popover_container"}>
                    <ul>
                        <li>Android design</li>
                        <li>blah, blah, blah</li>
                    </ul>
                </div>
            </Popover.Body>
        </Popover>
    );
    const databaseDesignPopover = (
        <Popover id={"popover-basic"}>
            <Popover.Body>
                <div className={"popover_container"}>
                    <ul>
                        <li>SQL</li>
                        <li>blah, blah, blah</li>
                    </ul>
                </div>
            </Popover.Body>
        </Popover>
    );
    const softwareEngineeringPopover = (
        <Popover id={"popover-basic"}>
            <Popover.Body>
                <div className={"popover_container"}>
                    <ul>
                        <li>Software Engineering</li>
                        <li>blah, blah, blah</li>
                    </ul>
                </div>
            </Popover.Body>
        </Popover>
    );
    const cPlusPlusPopover = (
        <Popover id={"popover-basic"}>
            <Popover.Body>
                <div className={"popover_container"}>
                    <ul>
                        <li>C++: Group project where we were tasked with implementing Dijkstra's algorithm to create
                            an international flight planner to allow the user to find the shortest and/or cheapest route
                            from one country to another</li>
                        <li>C: Group project for class titled “Advanced Microcontroller Design”. This involved creating a
                            semi-autonomous vehicle controlled remotely using wireless communications. </li>
                    </ul>
                </div>
            </Popover.Body>
        </Popover>
    );
    const finalYearPopover = (
        <Popover id={"popover-basic"}>
            <Popover.Body>
                <div className={"popover_container"}>
                    <ul>
                        <li>This involved a combination of hardware and software design techniques where an Arduino
                            I/O system was created that was capable of transposing notes played on a musical instrument
                            to musical notation and displaying this to the user in real time</li>
                    </ul>
                </div>
            </Popover.Body>
        </Popover>
    );*/

    return (
        <Fade top delay={200}>
            <div className={"page"} id={"education"}>
                <h1>Education</h1>
                {/*<div className={"education_module_holder"}>*/}
                    <div className={"education_module"}>
                            <h2 id={"title"}>Master of Science</h2>
                            <h3>Software Development</h3>
                            <h3>University of Strathclyde</h3>
                            <h4 id={"dates"}>2022-2023</h4>

                        {/*<h3>Modules</h3>
                        <ul>
                            <li>
                                <OverlayTrigger trigger={"hover"} placement={"right"} overlay={pythonJavaPopover}>
                                    <Button variant={"success"}>Python and Java</Button>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger trigger={"hover"} placement={"right"} overlay={mobileApplicationPopover}>
                                    <Button variant={"success"}>Mobile Application Development</Button>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger trigger={"hover"} placement={"right"} overlay={databaseDesignPopover}>
                                    <Button variant={"success"}>Database Development</Button>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger trigger={"hover"} placement={"right"} overlay={softwareEngineeringPopover}>
                                    <Button variant={"success"}>Software Engineering</Button>
                                </OverlayTrigger>
                            </li>
                        </ul>*/}
                    </div>
                    <div className={"education_module"}>
                            <h2 id={"title"}>Bachelor of Engineering</h2>
                            <h3>Electronic and Electrical Engineering</h3>
                            <h3>University of Strathclyde</h3>
                            <h4 id={"dates"}>2014-2018</h4>
                        {/*<h3>Modules</h3>
                    <ul>
                        <li>
                            <OverlayTrigger trigger={"hover"} placement={"right"} overlay={cPlusPlusPopover}>
                                <Button variant={"success"}>C and C++</Button>
                            </OverlayTrigger>
                        </li>
                        <li>
                            <OverlayTrigger trigger={"hover"} placement={"top"} overlay={finalYearPopover}>
                                <Button variant={"success"}>Solo Final Year Project: “Interpretation of notes being played on a musical instrument”</Button>
                            </OverlayTrigger>
                        </li>
                    </ul>*/}
                    </div>
                {/*</div>*/}
            </div>
        </Fade>
    )
}