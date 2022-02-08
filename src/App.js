import './App.css';
import './index.css';
import Home from "../src/components/Home/Home"
import Footer from './components/Footer/footer';
import Contact from './components/contact/contact';
import Blogs from './components/blogs/blog';
import Projects from './components/projects/projects';
import About from './components/about/about';
import NavBars from './components/Header/NavBars'
function App() {
    return (
        <>
            <NavBars />
            <Home id="home-tag"/>
            <About id="about"/>
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </>

    );
}





export default App;
