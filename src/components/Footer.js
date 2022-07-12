import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city São Paulo</p>
            </div>
            <div className="d-flex">
              <a href="tel:+55(12)988212121">+55(12)98821-2121</a>
            </div>
            <div className="d-flex">
              <p>nicolasdbarros@yahoo.com.br</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to='home' offset={-110} className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to='about' offset={-110} className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to='services' offset={-110} className="footer-nav">Services</Link>
              </div>
              <div className="col">
                <Link smooth={true} to='skills' offset={-110} className="footer-nav">Skills</Link>
                <br />
                <Link smooth={true} to='contacts' offset={-110} className="footer-nav">Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"www.nicolasdebarros.com.br"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"www.nicolasdebarros.com.br"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"www.nicolasdebarros.com.br"}
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={"www.nicolasdebarros.com.br"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Nicolas de Barros | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
