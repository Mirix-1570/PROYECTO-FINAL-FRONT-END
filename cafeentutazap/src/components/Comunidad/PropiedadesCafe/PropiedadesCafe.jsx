import React from "react";
import "./estilos.css";

const items = [
  {
    title: "1. Estimulante y mejorador cognitivo",
    body: "Estimula el cuerpo y la mente: La cafeína es un estimulante que mejora la alerta, la memoria y otras funciones cognitivas.",
  },
  {
    title: "2. Rico en antioxidantes",
    body: "Protección celular: El café contiene polifenoles y otros antioxidantes que ayudan a proteger las células del daño oxidativo y a prevenir enfermedades.",
  },
  {
    title: "3. Mejora el rendimiento físico",
    body: "Aumenta la energía y resistencia: La cafeína puede disminuir la fatiga y mejorar el rendimiento en el ejercicio, sirviendo como fuente de energía.",
  },
];

function PropiedadesCafe() {
  return (
    <section className="prop-section">
      <div className="prop-content">
        <div className="prop-left">
          <img
            className="prop-image"
            src="/media/propiedades_cafe.jpeg"
            alt="Propiedades del café"
          />
          <h2>Propiedades del Café</h2>
        </div>

        <div className="prop-right">
          <div className="prop-text">
            {items.map((it, idx) => (
              <div className="prop-item" key={idx}>
                <p className="prop-item-title">
                  <strong>{it.title}</strong>
                </p>
                <p className="prop-item-body">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropiedadesCafe;
