import { useState, useEffect } from "react"
import "../CSS/NavBar.css"

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        // Miramos todas las secciones de la página
        const sections = document.querySelectorAll("section");
  
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        setActiveSection(id); // Actualizamos la sección activa cuando el usuario llega a una nueva sección
                    }
                });
            },
            { threshold: 0.8 } // El 70% de la sección debe ser visible para activarse
        );
  
        sections.forEach((section) => {
            observer.observe(section);
        });
  
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
    
    return (
        <nav className="navbar">
        <a className={`navlink ${activeSection === "inicio" ? "active" : ""}`} href="#inicio">
          Inicio <hr />
        </a>
        <a className={`navlink ${activeSection === "experiencia" ? "active" : ""}`} href="#experiencia">
          Experiencia <hr />
        </a>
        <a className={`navlink ${activeSection === "proyectos" ? "active" : ""}`} href="#proyectos">
          Proyectos <hr />
        </a>
        <a className={`navlink ${activeSection === "educacion" ? "active" : ""}`} href="#educacion">
          Educación <hr />
        </a>
        <a className={`navlink ${activeSection === "habilidades" ? "active" : ""}`} href="#habilidades">
          Habilidades <hr />
        </a>
        <a className={`navlink ${activeSection === "sobremi" ? "active" : ""}`} href="#sobremi">
          Sobre mí <hr />
        </a>
      </nav>    )
}

export default NavBar