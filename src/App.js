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


/*function App() {*/
class App extends React.Component {
    constructor(props) {
        super(props);
        /*this.NavBarStyle = this.NavBarStyle.bind(this);*/
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            'scrolling': false,
            'currentY': window.scrollY
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let currentY = window.scrollY;
        if (currentY > this.state.currentY) {
            this.setState({
                scrolling: true,
                currentY: currentY
            });
        }
        else if (window.scrollY <= this.state.currentY){
            this.setState({
                scrolling: false,
                currentY: currentY
            });
        }
    }
    NavBarStyle = {
        /*display: this.state.scrolling ? 'none' : 'block',*/
        display: 'block',
        transition: '2s'
    }

    render() {
        return (
            <div className={"main_container"} id={"root"}>
                <div className={'NavBar'} style={{opacity: this.state.scrolling ? '0' : '1'}}>
                    <NavBar />
                </div>
                <Home/>
                <AboutMe/>
                <Education/>
                <Projects/>
                <ContactMe/>
                <Footer/>
            </div>
        );
    }
}

export default App;

/*
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
                {/!*<Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={'/education'} element={<Education />} />
                <Route path={'/aboutme'} element={<AboutMe />} />
                <Route path={'/projects'} element={<Projects />} />
                <Route path={'/contactme'} element={<ContactMe />} />
            </Routes>*!/}
                <Footer />
            </BrowserRouter>

        </div>
    );
}*/
