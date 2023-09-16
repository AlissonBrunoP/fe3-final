import React from "react";
import DHLogo from "../images/DH.png";
import FB from "../images/ico-facebook.jpg";
import IG from "../images/ico-instagram.jpg";
import TK from "../images/ico-tiktok.jpg";
import WP from "../images/ico-whatsapp.jpg";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div id="contenedorFooter">
        <div id="footerTexto">
          <p>Powered by</p>
        </div>
        <div id="footerRedes">
          <div>
            <img src={DHLogo} alt="DH-logo" id="dhLogo"/>
          </div>
          <div>
            <img src={FB} alt="Facebook" className="redesSociales" />
            <img src={IG} alt="Insagram" className="redesSociales"  />
            <img src={WP} alt="Whatsapp" className="redesSociales" />
            <img src={TK} alt="TikTok" className="redesSociales" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
