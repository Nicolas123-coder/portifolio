import React from "react"
import Typed from "react-typed"
import { Link } from 'react-scroll';

const Header = () => {
  return (
   <div id='home' className="header-wraper">
       <div className="main-info">
            <h1>web dev</h1>
            <Typed
                className="typed-text"
                strings={[
                    "Development",
                    "BackEnd",
                    "FrontEnd",
                    "NodeJs",
                    "React JS"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Link href='#' smooth={true} to='contacts' offset={-110} className="btn-main-offer">contact me</Link>
       </div>
   </div>
  )
}

export default Header
