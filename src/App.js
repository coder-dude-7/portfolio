import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Education from "./Education"
import Home from "./Home";
import NavBar from "./NavBar"
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import {Reveal} from "react-reveal";

function App() {
  return (
    <div className={"main_container"} id={"root"}>
        <BrowserRouter>
            <NavBar />
            <Home />
            <AboutMe />
            <Education />
            <Projects />
            <ContactMe />
            {/*<Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={'/education'} element={<Education />} />
                <Route path={'/aboutme'} element={<AboutMe />} />
                <Route path={'/projects'} element={<Projects />} />
                <Route path={'/contactme'} element={<ContactMe />} />
            </Routes>*/}
            <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;
