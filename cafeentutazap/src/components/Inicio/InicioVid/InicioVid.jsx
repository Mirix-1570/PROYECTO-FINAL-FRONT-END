import React from 'react'
import './estilos.css'
import heroVid from '../../../videos/153456-805688480_small.mp4'

function InicioVid() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        src={heroVid}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero__overlay">
        <h1 className="hero__title">Café en tu Taza</h1>
        <p className="hero__subtitle">Propiedades, Productores y Sabores</p>
        <button className="hero__btn">Ver Más</button>
      </div>
    </section>
  )
}

export default InicioVid