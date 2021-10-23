import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h6>
          Copyright © 2021 | <a href="https://inyazn.web.app">inyazn</a>
        </h6>
      </div>
      <div className="footer__right">
        <a
          className="footerLinks"
          href="https://www.facebook.com/yazeenshiraz/"
        >
          <FontAwesomeIcon className="footer__social" icon={faFacebook} />
        </a>
        <a className="footerLinks" href="https://www.instagram.com/inyazn/">
          <FontAwesomeIcon className="footer__social" icon={faInstagram} />
        </a>
        <a className="footerLinks" href="https://inyazn.web.app">
          <FontAwesomeIcon className="footer__social" icon={faGlobeAsia} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
