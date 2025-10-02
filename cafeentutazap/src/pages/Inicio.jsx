import React from "react";
// import InicioFrase from '../components/Inicio/InicioFrase/InicioFrase'
import InicioVid from "../components/Inicio/InicioVid/InicioVid";
import NavBar from "../components/EveryWhere/NavBar/NavBar";
import HeroImages from "../components/Inicio/HeroImages/HeroImages";
import Footer from "../components/EveryWhere/Footer/Footer";
import ContactMe from "../components/Contacto/ContactMe/ContactMe";
import Encuentra from "../components/Comunidad/Encuentra/Encuentra";
import PropiedadesCafe from "../components/Comunidad/PropiedadesCafe/PropiedadesCafe";
import Tienda from "../components/Café/Tienda/Tienda";
import Blog from "../components/Café/Blog/Blog";
import SobreMi from "../components/Contacto/SobreMi/SobreMi";

function Inicio() {
  return (
    <div>
      <InicioVid />
      {/* <InicioFrase /> */}
      <NavBar />
      <HeroImages />
      <ContactMe />
      <Encuentra />
      <PropiedadesCafe />
      <Tienda />
      <Blog />
      <SobreMi />
      <Footer />
    </div>
  );
}

export default Inicio;
