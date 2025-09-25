import React from 'react'
import Productores from '../components/Comunidad/Productores/Productores'
import Mapa from '../components/Comunidad/Mapa/Mapa'
import NavBar from '../components/EveryWhere/NavBar/NavBar'
import Footer from '../components/EveryWhere/Footer/Footer'

function Comunidad() {
  return (
    <div>
      <Productores />
      <Mapa />
      <NavBar />
      <Footer />
    </div>
  )
}

export default Comunidad