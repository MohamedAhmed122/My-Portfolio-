import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";

import "./Styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="art">
        <div className="social">
          <a className="link" href="#lab">
            <FacebookIcon fontSize="large" />
          </a>

          <a className="link" href="#lab">
            <InstagramIcon fontSize="large" />
          </a>

          <a className="link" href="# ">
            <LinkedInIcon fontSize="large" />
          </a>

          <a className="link" href="#lab">
            <MailIcon fontSize="large" />
          </a>

          <a className="link" href="#lab">
            <WhatsAppIcon fontSize="large" />
          </a>
        </div>
        <div className="text">
          <h5> © <span className='span'>Mohamed Youssef </span>2020</h5>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
