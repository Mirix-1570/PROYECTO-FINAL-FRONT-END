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
    <main className="login-page">
      <div className="login-container">
        <img src="/media/logo.png" alt="Logo" className="login-logo" />
        <div className="login-card">
          <h2 className="login-title">Iniciar sesión</h2>

          <form className="login-form">
            <label htmlFor="usuario" className="login-label">
              Usuario
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              className="login-input"
              value={usuario}
              placeholder="correo o usuario"
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label htmlFor="contrasena" className="login-label">
              Contraseña
            </label>
            <input
              id="contrasena"
              name="contrasena"
              type="password"
              className="login-input"
              value={contrasena}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-btn" onClick={Validalogin}> 
              Iniciar sesión
            </button>
          </form>

          <p className="login-help">¿Aún no tienes cuenta? Regístrate</p>
        </div>
      </div>
    </main>
  );
}

export default Login;



