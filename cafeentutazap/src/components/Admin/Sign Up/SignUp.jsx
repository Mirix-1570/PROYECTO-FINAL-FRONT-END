import React, { useState } from 'react'
import '../Sign Up/estilos.css'
import UserService from '../../../servises/UserService.jsx'

function SignUp() {

  const [nombre, setNombre]=useState('')
  const [apellido, setApellido]=useState('')
  const [usuario, setUsuario]=useState('')
  const [contraseña, setContraseña]=useState('')
  const [password, setPassword]=useState('')

  const registrarUsuario = async() =>{
// llamar servicio de post y enviar el objeto de usuario
    
    const objUsuario ={

          nombre :nombre,
          apellido:apellido,
          password:password

        }
      console.log(objUsuario)
    const resultadoGuardado = await UserService.postUsuarios(objUsuario)
    console.log(resultadoGuardado)

  }
  
  

  return (
    <div>SignUp
      <div class= 'formulario'>
        <div class= 'Nombre'>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>          
        <div class= 'Apellido'>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        </div>
        <div class= 'Username'>
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
        </div>
        <div class= 'Password'>
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" name="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
        </div>
        <div class= 'Confirmar contraseña'>
          <label htmlFor="password">Confirmar contraseña</label>
          <input type="password" id="password" name="confirmar contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={registrarUsuario}>Registrarse</button>
      </div>
    </div>
  )
}

export default SignUp