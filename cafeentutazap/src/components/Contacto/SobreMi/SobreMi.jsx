import React from "react";
import "./estilos.css";

function SobreMi() {
  return (
    <section className="sobremi-section" aria-labelledby="sobremi-title">
      <div className="sobremi-content">
        <div className="sobremi-left">
          <img
            className="sobremi-image"
            src="/media/sobremi.jpeg"
            alt="Sobre mí"
          />
          <h2 id="sobremi-title">Sobre Mí</h2>
        </div>

        <div className="sobremi-right">
          <div className="sobremi-text">
            <p className="sobremi-desc">
              descripción de mi persona profesionalmente.
            </p>

            <div className="sobremi-contact">
              <p>Av.17A La Riviera, Esparza, Puntarenas,</p>
              <p>Costa Rica.</p>
              <p>60692374</p>

              <p className="sobremi-email">miricruz1570@gmail.com</p>

              <nav className="sobremi-social" aria-label="redes sociales">
                <a href="#" className="sobremi-link">
                  Facebook
                </a>
                <a href="#" className="sobremi-link">
                  Instagram
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
