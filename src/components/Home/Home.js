import Tabs from '@mui/material/Tabs';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../style.css';
import About from '../about/about';
import Blogs from '../blogs/blog';
import Contact from '../contact/contact';
import Projects from '../projects/projects';
import NameAnimation from "./NameAnimation";

function Home() {
    return (
        <div className="Home-container">
            {/* <img className="home-logo" src={logo}/> */}
            <h1 className="hi">Hi,</h1>
            <h1 className="i-am">I am</h1>
            <h1 className="name"><NameAnimation /> </h1>
            <h1 className="domain">Web Developer</h1>
            <p className="specifics">Frontend developr / Digital technical content creator / Blogger</p>
            <div>
                <Router>
                    <div className='home-buttons'>
                        <Tabs aria-label="icon label tabs example">

                            <a href="https://www.instagram.com/rabbits_code/" target={"_blank"}>
                                <img className="home-icon" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" href="https://www.instagram.com/rabbits_code/" target="_blank" />

                            </a>
                            <a href="https://www.linkedin.com/in/naga-pranav-4919aa223/" target={"_blank"}>
                                <img className="home-icon" src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png" />
                            </a>
                            <a href="https://stackoverflow.com/users/17123665/naga-pranav" target={"_blank"}>
                            <img className="home-icon" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-shadow-tal-revivo.png" />
                            </a>
                            <a href="https://github.com/nagapranav" target={"_blank"}>
                            <img className="home-icon" src="https://img.icons8.com/color/48/000000/github--v3.png" />
                            </a>

                        </Tabs>
                    </div>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/blogs" element={<Blogs />}>
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    )
}
export default Home;