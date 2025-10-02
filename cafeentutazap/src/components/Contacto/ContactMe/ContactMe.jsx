import React from 'react'
import './estilos.css'
import Productores from '../../Comunidad/Productores/Productores'

function ContactMe() {
  return (
    <>
      <section className="contactme-hero">
        <div className="contactme-overlay">
          <div className="contactme-card">
            <h2>Contáctame</h2>
            <div className="contactme-address">
              <p>Av.17A La Riviera de Esparza,</p>
              <p>Puntarenas, Costa Rica.</p>
              <p>60692374</p>
            </div>

            <div className="contactme-social" aria-label="redes-sociales">
              <p>miricruz1570@gmail.com</p>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productores se muestra inmediatamente después para que se vea unido */}
      <Productores />
    </>
  )
}

export default ContactMe
