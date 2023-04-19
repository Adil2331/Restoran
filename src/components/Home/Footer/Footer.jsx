import React from "react";
import "./Footer.modul.scss";
import logo from "../../../assets/img/footer-logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Link className="footer__logo">
            <img src={logo} alt="" />
          </Link>
          <Link className="Privat">Политика конфиденциальности</Link>
          <Link className="design">Дизайн d-e-n.ru</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
