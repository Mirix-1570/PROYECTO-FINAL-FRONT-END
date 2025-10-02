import React from 'react'
import './estilos.css'

function Productores() {
  const productores = [
    { name: 'Esteban Fraiganes', img: '/media/esteban.webp' },
    { name: 'Eloy Urtado', img: '/media/eloy.webp' },
    { name: 'José Rodríguez', img: '/media/jose.jpg' },
    { name: 'Gerardo Toledo', img: '/media/gerardo.jpg' },
  ]

  return (
    <section className="productores-section" aria-label="productores">
      <div className="productores-wrapper">
        <img
          className="productores-img"
          src="/media/productores.jpeg"
          alt="Productores de café"
          loading="lazy"
        />

        <div className="productores-overlay" role="list" aria-label="Lista de productores">
          <h3>Productores</h3>

          <div className="productores-list">
            {productores.map((p) => (
              <div className="productor-item" key={p.name} role="listitem">
                <img className="productor-avatar" src={p.img} alt={`${p.name} avatar`} loading="lazy" />
                <div className="productor-name">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productores