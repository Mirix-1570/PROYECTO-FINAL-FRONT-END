import React, { useRef } from "react";
import "./estilos.css";

const products = [
  {
    productId: "cafe-pina",
    name: "Café de piña",
    description: "Sabor a Piña Tropical",
    roastLevel: "Tueste Medio",
    price: "$60",
  },
  {
    productId: "cafe-arenal",
    name: "Café del Arenal",
    description: "Plantado en las faldas del Volcán",
    roastLevel: "Tueste Oscuro",
    price: "$80",
  },
  {
    productId: "cafe-stullo-cambu",
    name: "Café Stullo Cambú",
    description: "Sabor a Ponche de Frutas",
    roastLevel: "Tueste Claro",
    price: "$120",
  },
];

function Tienda() {
  const scrollRef = useRef(null);

  const scroll = (dir = "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="tienda-root" aria-labelledby="tienda-heading">
      <div className="tienda-hero">
        <div className="tienda-hero-overlay">
          <h1 id="tienda-heading" className="tienda-title">
            Tienda
          </h1>
          <p className="tienda-subtitle">
            Productos de los productores locales nacionales
          </p>
        </div>
      </div>

      <div className="tienda-products-section">
        <button
          className="tienda-arrow tienda-arrow-left"
          aria-label="Desplazar a la izquierda"
          onClick={() => scroll("left")}
        >
          ‹
        </button>

        <div className="tienda-products" ref={scrollRef}>
          {products.map((p) => (
            <article
              className="product-card"
              key={p.productId}
              aria-labelledby={p.productId + "-name"}
            >
              <div className="product-body">
                <h3 id={p.productId + "-name"} className="product-name">
                  {p.name}
                </h3>
                <p className="product-desc">{p.description}</p>
                <p className="product-roast">{p.roastLevel}</p>
                <div className="product-footer">
                  <button
                    className="product-button"
                    aria-label={`Agregar ${p.name} al carrito — ${p.price}`}
                  >
                    <span className="product-button-text">{p.price}</span>
                    {/* cart icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="product-button-icon"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="tienda-arrow tienda-arrow-right"
          aria-label="Desplazar a la derecha"
          onClick={() => scroll("right")}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Tienda;
