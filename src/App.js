import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from 'react-tsparticles';
import NavBar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Header/>
    <AboutMe/>
    <Services/>
    <Skills/>
    <Footer/>
    </>
    );
}

export default App;
