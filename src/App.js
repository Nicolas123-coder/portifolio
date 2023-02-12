import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <NavBar/>
    <Header/>
    <AboutMe/>
    <Services/>
    <Portfolio/>
    <Skills/>
    <Contacts/>
    <Footer/>
    </>
    );
}

export default App;
