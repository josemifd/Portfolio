import { Tooltip, Button } from "@nextui-org/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../CSS/Home.css"
import yo from "../assets/Yo.png"
import Experiencia from "../components/Experiencia";
import NavBar from "../components/NavBar";
import Educacion from "../components/Educacion";
import Habilidades from "../components/Habilidades";
import Proyectos from "../components/Proyectos";

const Home = () => {
    return (
        <div className="home">
            <NavBar/>
            <section id="inicio" className="inicio">
                <div className="inicio-container">
                <div className="titulo w-full">
                    <h1> <span className="des">Desarrollador</span> y <br/>Estudiante </h1>
                    <h3 className="opacity-70"> José Miguel Florentín Domingo </h3>
                </div>
                <div className="iconos space-x-3">
                    <Tooltip className="bg-background text-white" content="GitHub">
                        <Button 
                            className="text-2xl" 
                            color="primary" 
                            onClick={() => window.open('https://github.com/josemifd', '_blank')}
                        >
                            <FaGithub />
                        </Button>
                    </Tooltip>
                    <Tooltip className="bg-background text-white" content="Linkedin">
                        <Button 
                            className="text-2xl" 
                            color="primary" 
                            onClick={() => window.open('https://www.linkedin.com/in/jos%C3%A9-miguel-florent%C3%ADn-domingo-397532294/', '_blank')}
                        >
                            <FaLinkedin />
                        </Button>
                    </Tooltip>
                    <Button 
                        className="icon transition-all duration-1000 text-lg font-bold" 
                        color="primary"
                        onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'Jose_Miguel_Florentin_CV.pdf';  // Ruta del archivo PDF
                        link.download = 'Jose_Miguel_Florentin_CV.pdf';  // Nombre del archivo a descargar
                        link.click();  // Forzar la descarga
                        }}
                    >
                        <span> 
                            Descargar 
                        </span> 
                        CV
                    </Button>
                </div>
                </div>
            </section>
            <section id="sobremi" className="sobremi">
                <div className="sobremi-container">
                    <img
                        className="img-yo"
                        src={yo}
                    />
                    <div className="presentacion">
                        <h1> José Miguel Florentín Domingo </h1>
                        <p className="mb-[10px]"> Actualmente soy estudiante de último curso en Ingeniería 
                            Informática. </p> 
                        <p className="mb-[10px]">
                            Busco iniciar mi carrera profesional en un lugar donde poder aplicar
                            mis conocimientos en proyectos y seguir aprendiendo al mismo tiempo.
                        </p> 
                        <p className="mb-[10px]">
                            Me considero una persona resolutiva, con facilidad para 
                            el trabajo en equipo y una gran disposición para 
                            aprender.
                        </p>
                    </div>
                </div>
            </section>
            {/* <section id="experiencia" className="ex-section">
                <div className="ex-container">
                    <h2> E X P E R I E N C I A </h2>
                    <Experiencia/>
                </div>
            </section> */}
            <section id="proyectos" className="section">
                <div className="ex-container mt-[5vh]">
                    <h2> PROYECTOS </h2>
                    <Proyectos/>
                </div>
            </section>
            <section id="educacion" className="section">
                <div className="ex-container mt-[5vh]">
                    <h2> EDUCACIÓN </h2>
                    <Educacion/>
                </div>

            </section>
            <section id="habilidades" className="section mb-[20vh]">
                <div className="w-full mt-[5vh]">
                    <h2> HABILIDADES </h2>
                    <Habilidades/>
                </div>
            </section>
        </div>
    )
}

export default Home