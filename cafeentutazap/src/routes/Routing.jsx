import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Inicio from "../pages/Inicio";
import Café from "../pages/Café";
import Comunidad from "../pages/Comunidad";
import Contacto from "../pages/Contacto";
import Registrar from "../pages/Registrar";
import IniciarSesion from "../pages/IniciarSesion";
import Administrador from "../pages/Administrador";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Inicio" />} />{" "}
        {/* Investigado */}
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Café" element={<Café />} />
        <Route path="/Comunidad" element={<Comunidad />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Administrador" element={<Administrador />} />
      </Routes>
    </Router>
  );
};

export default Routing;
