import React from 'react'
import '../FormAdmin/estilos.css'
import { useState } from 'react'
import UserService from '../../../servises/UserService'

function FormAdmin() {
  const [precio, setPrecio] = useState("")
  const [nombre, setNombre] = useState("")
  async function Guardar() {
    console.log(precio, nombre) 
    const carga = {
      precio: precio,
      nombre: nombre
    }
    const respuesta = await UserService.postProductos(carga)
    
  }
  
  const [productos, setProductos] = useState([])

  async function cargarProductos() {
    const res = await UserService.getProductos()
    setProductos(res.data)
  }

  useState(() => {
    cargarProductos()
  }, [])


  return (
    <div>FormAdmin
        
          <label >precio</label>
          <input type="text" value={precio} onChange={e => setPrecio(e.target.value)}/>
          <label >nombre de producto</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>
        <button onClick={Guardar}>Guardar</button>
        
    </div>
  )
}

export default FormAdmin