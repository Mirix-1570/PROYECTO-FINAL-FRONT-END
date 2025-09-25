import React from 'react'
import Blog from '../components/Café/Blog/Blog'
import Propiedades from '../components/Café/Propiedades/ProperiesCafe'
import Tienda from '../components/Café/Tienda/Tienda'
import NavBar from '../components/EveryWhere/NavBar/NavBar'
import Footer from '../components/EveryWhere/Footer/Footer'

function Café() {
  return (
    <div>
      <Propiedades />
      <Tienda />
      <Blog />
      <NavBar />
      <Footer />
    </div>
  )
}

export default Café