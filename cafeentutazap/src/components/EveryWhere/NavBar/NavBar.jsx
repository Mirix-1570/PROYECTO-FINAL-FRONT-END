import React, { useEffect, useRef, useState } from "react";
import "./estilos.css";
import { Link } from "react-router";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const tickingRef = useRef(false);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // target translate grows slowly with scroll to create a "drag" feeling
      targetRef.current = Math.min(window.scrollY * 0.12, 14);
      setIsScrolled(window.scrollY > 0);
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      // simple easing towards target
      currentRef.current += (targetRef.current - currentRef.current) * 0.16;

      if (Math.abs(targetRef.current - currentRef.current) > 0.1) {
        requestAnimationFrame(animate);
      } else {
        tickingRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // ensure initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tickingRef.current = false;
    };
  }, []);

  // Close on Escape and restore scroll when drawer closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && drawerOpen) setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // lock body scroll while drawer is open
    document.body.style.overflow = drawerOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // When drawer opens, focus first link for accessibility
  useEffect(() => {
    if (drawerOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [drawerOpen]);

  const handleLinkClick = () => {
    // close drawer after navigation on mobile
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className={`site-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-title">
            <h1>Café en tu Taza</h1>
          </div>

          <div
            className="nav-actions"
            role="navigation"
            aria-label="Enlaces principales"
          >
            <Link className="nav-btn" to="/inicio">
              Inicio
            </Link>
            <Link className="nav-btn" to="/café">
              Café
            </Link>
            <Link className="nav-btn" to="/contacto">
              Contacto
            </Link>
            <Link className="nav-btn" to="/iniciarsesion">
              Login
            </Link>
            <Link className="nav-btn" to="/registro">
              SignUp
            </Link>
            <Link className="nav-btn" to="/comunidad">
              Comunidad
            </Link>
          </div>

          {/* hamburger for small screens */}
          <button
            className={`hamburger ${drawerOpen ? "open" : ""}`}
            aria-label={drawerOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((s) => !s)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </nav>

      {/* drawer overlay and panel for mobile */}
      <div
        className={`drawer-overlay ${drawerOpen ? "visible" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      <aside
        className={`drawer-panel ${drawerOpen ? "open" : ""}`}
        aria-hidden={!drawerOpen}
      >
        <nav className="drawer-nav" aria-label="Navegación móvil">
          <Link
            ref={firstLinkRef}
            tabIndex={drawerOpen ? 0 : -1}
            className="drawer-link"
            to="/inicio"
            onClick={handleLinkClick}
          >
            Inicio
          </Link>
          <Link
            tabIndex={drawerOpen ? 0 : -1}
            className="drawer-link"
            to="/café"
            onClick={handleLinkClick}
          >
            Café
          </Link>
          <Link
            tabIndex={drawerOpen ? 0 : -1}
            className="drawer-link"
            to="/comunidad"
            onClick={handleLinkClick}
          >
            Comunidad
          </Link>
          <Link
            tabIndex={drawerOpen ? 0 : -1}
            className="drawer-link"
            to="/contacto"
            onClick={handleLinkClick}
          >
            Contacto
          </Link>
          <Link
            tabIndex={drawerOpen ? 0 : -1}
            className="drawer-link"
            to="/iniciarsesion"
            onClick={handleLinkClick}
          >
            Login
          </Link>
          <Link
            tabIndex={drawerOpen ? 0 : -1}
            className="drawer-link"
            to="/registro"
            onClick={handleLinkClick}
          >
            SignUp
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default NavBar;
