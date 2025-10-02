import React from 'react'
import './estilos.css'

function Encuentra() {
  return (
    <section className="encuentra-section">
      <div className="encuentra-content">
        <div className="encuentra-text">
          <h2>Encuentra</h2>
          <p className="encuentra-sub">el productor más<br/>cercano a tu hogar</p>
          <button className="encuentra-btn">Ver Mapa</button>
        </div>
        <div className="encuentra-image">
          {/* Using public path for the image */}
          <img src="/media/map.png" alt="Mapa de productores" />
        </div>
      </div>
    </section>
  )
}

export default Encuentra
