import React from 'react'
import Blog from '../components/Café/Blog/Blog'
import Propiedades from '../components/Café/Propiedades/ProperiesCafe'
import Tienda from '../components/Café/Tienda/Tienda'

function Café() {
  return (
    <div>
      <Propiedades />
      <Tienda />
      <Blog />
    </div>
  )
}

export default Café