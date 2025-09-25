import React from 'react'
import InicioFrase from '../components/Inicio/InicioFrase/InicioFrase'
import InicioVid from '../components/Inicio/InicioVid/InicioVid'
import NavBar from '../components/EveryWhere/NavBar/NavBar'
import Footer from '../components/EveryWhere/Footer/Footer'

function Inicio() {
  return (
    <div>
        <InicioVid />
        <InicioFrase />
        <NavBar />
        <Footer />
    </div>
  )
}

export default Inicio