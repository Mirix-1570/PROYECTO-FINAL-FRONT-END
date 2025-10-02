import React from 'react'
import './estilos.css'

function HeroImages() {
  return (
    <section className="hero-split" aria-label="Imágenes de inicio">
      <div className="hero-side hero-left" role="img" aria-label="Imagen inicio 1" />
      <div className="hero-side hero-right" role="region" aria-label="Imagen inicio 2">
        <div className="hero-content">
          {/* imagen principal que toma protagonismo */}
          <img
            className="hero-foreground"
            src="/media/inicio2.jpeg"
            alt="Detalle de granos de café"
          />

          {/* texto descriptivo debajo de la imagen */}
          <p className="hero-caption">El café es el arte que da una planta, diseñada especialmente para darle un sabor hermoso a tu boca.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroImages
