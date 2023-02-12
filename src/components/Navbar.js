import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
      <a className="navbar-brand" href="#">
        <img className="logo" src={logo} alt="logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
      </button>
      
      {/* <a href="CV Nicolas.pdf" download="CV Nicolas.pdf">
        <button className="nav-button">
          Download Resume
        </button>
      </a> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link smooth={true} to='home' offset={-110} className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to='about' offset={-110} className="nav-link" href="#">
              about me
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to='services' offset={-110} className="nav-link" href="#">
              services
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to='portfolio' offset={-110} className="nav-link" href="#">
              My Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to='skills' offset={-110} className="nav-link" href="#">
              skills
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to='contacts' offset={-110} className="nav-link" href="#">
              contact
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
