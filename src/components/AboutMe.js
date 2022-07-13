import React from "react"
import me from "../me.jpeg"

const AboutMe = () => {
  return (
    <div id='about' className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
            <img className="profile-img" src={me} alt="me"/>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
            Hey there ! I am Nicolas. I have been developing since 2020, both front-end and back-end applications. The technologies that I mostly use are Node Js and Python for API’s development, such as their common used libraries. About the Front-end technologies that I use, Bootstrap, React, HTML and CSS are my most used. Such as the development itself, I have experiences with cloud provisioning, most familiarized with AWS services (S3, ECS, Lambda), and the indispensables practices with different structs of Databases as well, MongoDB and PostgresSql, for example. 
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
