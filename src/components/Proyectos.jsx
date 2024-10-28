import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiOcaml, SiExpress, SiMongodb, SiGithubactions } from "react-icons/si";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "../CSS/Proyectos.css"
import { Button, ScrollShadow, Tooltip } from "@nextui-org/react";
import Skill from "./Skill";

const Proyectos = () => {
    const proyectos = [
        {
            img: "/Portfolio/vikings.webp",
            title: "Viking Brothers Gym Web",
            skills: [
                "React",
                "JavaScript",
                "GitHub",
                "GitHub Actions",
            ],
            description: [
                "En uno de mis veranos como estudiante, propuse a los dueños de mi gimnasio la idea de crearles su propia página web.",
                "Pese a tratarse de un proyecto sencillo dadas las necesidades del gimnasio, me siento muy orgulloso de contribuir a dar a conocer el negocio. Además, también mantengo la web para informar a los clientes actualizando los horarios de las clases, tarifas, insertando noticias, etc."
            ],
            gitHub: "https://github.com/vikingbrothersgym/vikingbrothersgym",
            url: "https://vikingbrothersgym.github.io/vikingbrothersgym/"
        },
        {
            img: "/Portfolio/unizircle.webp",
            title: "UniZircle",
            skills: [
                "React",
                "JavaScript",
                "GitHub",
                "GitHub Actions",
            ],
            description: [
                "Participé en las Jornadas WAS-Circulamos en la Universidad de Zaragoza los días 30 y 31 de octubre de 2024. A la vez que participaba como voluntario organizando el evento, también desarrollé una solución a uno de los retos que se planteaban.",
                "El reto consistía en conseguir reducir la compra de mobiliario nuevo, disminuir los residuos, y contribuir a una cultura de reutilización en la sociedad a través de la Universidad. Este prototipo se trata de una plataforma al estilo Wallapop que permite el intercambio de material entre distintos departamentos de la universidad."
            ],

            gitHub: "https://github.com/josemifd/unizircle",
            url: "https://josemifd.github.io/unizircle/"
        }
    ]

    return (
        <div className="flex flex-col justify-center">
            {proyectos.map((p, idx) => (
                <div key={idx} className="proy-container">
                    <img className="proy-img rounded-2xl" src={p.img} />
                    {/* <div className="proy-text"> */}
                        <ScrollShadow  className="proy-text h-5/6">
                        <div className="flex justify-between items-center">
                            <h2> {p.title} </h2>
                            <div className="proy-links space-x-2">
                                <Tooltip className="bg-background text-white" content="Repositorio">
                                    <Button 
                                      color="primary"
                                      onClick={() => window.open(p.gitHub, '_blank')}
                                    >
                                        <FaGithub className="text-2xl text-white"/>
                                    </Button>
                                </Tooltip>
                                <Tooltip className="bg-background text-white" content="Ver web">
                                    <Button 
                                      color="primary"
                                      onClick={() => window.open(p.url, '_blank')}
                                    >
                                        <FaExternalLinkAlt className="text-xl text-white"/>
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                        <ul className="proy-skills">
                        {p.skills.map((skill, idx) => (
                            <li key={idx} className="proy-skill">
                                <Skill name={skill}/>
                            </li>
                        ))}
                        </ul>
                        {p.description.map((des, idx) => (
                            <>
                                <p key={idx}> {des}  <br/> </p>
                            </>
                        ))}
                        </ScrollShadow>
                    {/* </div> */}
                </div>
            ))}
        </div>
    )    
}

export default Proyectos