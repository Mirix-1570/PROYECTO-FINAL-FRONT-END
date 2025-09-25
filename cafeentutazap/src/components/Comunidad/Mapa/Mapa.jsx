import React from 'react'
import '../Mapa/estilos.css'

function Mapa() {
  return (
    <div>Mapa
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15689.900879612436!2d-84.66543616771324!3d9.99386000547167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1758736163628!5m2!1ses-419!2scr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <h3>Encuentra</h3> <br />
      <h3>el productor más cercano a tu hogar</h3>
      <button>Ver Mapa</button>
    </div>
  )
}

export default Mapa