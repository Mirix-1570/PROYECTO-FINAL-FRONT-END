import React from "react";
import "../Footer/estilos.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer compact-footer" role="contentinfo">
      <div className="footer-row">
        <div className="footer-left">
          <span className="brand">Café en tu taza</span>
          <span className="dot">•</span>
          <a className="footer-link" href="/contacto">
            Contacto
          </a>
        </div>

        <div className="footer-right">
          <small>© {year} Café en tu taza</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
