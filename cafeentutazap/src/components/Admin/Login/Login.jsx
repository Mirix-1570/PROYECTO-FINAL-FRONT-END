import React from "react";
import "./estilos.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import UserService from "../../../servises/UserService.jsx";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const navegar = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const fecthUsuarios = async () => {
      try {
        const usuariosTraidos = await UserService.getUsuarios();
        setUsuarios(usuariosTraidos);
      } catch (error) {
        console.error("Error al traer los usuarios del servicio", error);
      }
    };

    fecthUsuarios();
  }, []);

  const Validalogin = async () => {
    setError("");
    if (!usuario || !contrasena) {
      setError("Por favor ingresa usuario y contraseña.");
      return;
    }

    try {
      const usuarioEncontrado = usuarios.find(
        (u) => u.nombre === usuario && u.password === contrasena
      );
      console.log(usuarioEncontrado);

      if (usuarioEncontrado) {
        localStorage.setItem("token", usuarioEncontrado.id);

        navegar("/Administrador");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesion", error);
      setError("Error al iniciar sesión. Intenta más tarde.");
    }
  };

  return (
    <div>
      Login
      <div className="Username">
        {" "}
        {/* Cambia class por className */}
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />{" "}
        {/* Añade value y onChange */}
      </div>
      <div className="Password">
        {" "}
        {/* Cambia class por className */}
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        {/* Añade value y onChange */}
      </div>
      {error && (
        <div className="error" style={{ color: "red", marginTop: 8 }}>
          {error}
        </div>
      )}
      <button type="button" onClick={Validalogin}>
        Iniciar sesión
      </button>
    </div>
  );
}

export default Login;
