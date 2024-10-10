import { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../CSS/NavBar.css"

const NavBar = () => {

    // Para el NavBar grande
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

    // Para el NavBar pequeño
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
      setClicked(!clicked)
    }
  
    // Añadir o quitar la clase 'no-scroll' al body solo cuando el menu-little está activo
    useEffect(() => {
      if (clicked) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
  
      // Limpieza: asegurar que la clase se quite si el componente se desmonta
      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, [clicked]);
  
    
    return (
      <>
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
      </nav>

      <div className="navbar-little">
        <a className={`menu-button${clicked ? '-clicked' : ''}`}
           onClick={handleClick}>
            <AiOutlineMenu/>
        </a>
        <a className={`close-button${clicked ? '-clicked' : ''}`}
           onClick={handleClick}>
            <AiOutlineClose/>
        </a>
      </div>

      <nav className={`menu-little${clicked ? '-clicked' : ''}`}>
        <a className={`navlink ${activeSection === "inicio" ? "active" : ""}`} href="#inicio">
          Inicio
        </a>
        <a className={`navlink ${activeSection === "experiencia" ? "active" : ""}`} href="#experiencia">
          Experiencia
        </a>
        <a className={`navlink ${activeSection === "proyectos" ? "active" : ""}`} href="#proyectos">
          Proyectos
        </a>
        <a className={`navlink ${activeSection === "educacion" ? "active" : ""}`} href="#educacion">
          Educación
        </a>
        <a className={`navlink ${activeSection === "habilidades" ? "active" : ""}`} href="#habilidades">
          Habilidades
        </a>
        <a className={`navlink ${activeSection === "sobremi" ? "active" : ""}`} href="#sobremi">
          Sobre mí
        </a>
      </nav>
      </>
    )
}

export default NavBar