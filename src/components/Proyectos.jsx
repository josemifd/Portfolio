import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiOcaml, SiExpress, SiMongodb, SiGithubactions } from "react-icons/si";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "../CSS/Proyectos.css"
import { Button, Tooltip } from "@nextui-org/react";
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
            gitHub: "https://github.com/vikingbrothersgym/vikingbrothersgym",
            url: "https://vikingbrothersgym.github.io/vikingbrothersgym/"
        }
    ]

    return (
        <div className="flex justify-center">
            {proyectos.map((p, idx) => (
                <div key={idx} className="proy-container">
                    <img className="proy-img rounded-2xl" src={p.img} />
                    <div className="proy-text">
                        <h2> Viking Brothers Gym Web </h2>
                        <ul className="proy-skills">
                        {p.skills.map((skill, idx) => (
                            <li key={idx} className="proy-skill">
                                <Skill name={skill}/>
                            </li>
                        ))}
                        </ul>
                        <p> En uno de mis veranos como estudiante, propuse a los
                            dueños de mi gimnasio la idea de crearles su propia
                            página web. <br/> <br/>
                            Pese a tratarse de un proyecto sencillo dadas las necesidades 
                            del gimnasio, me siento muy orgulloso de contribuir 
                            a dar a conocer el negocio.
                            Además, también mantengo la web para informar a los 
                            clientes actualizando los horarios de las clases, 
                            tarifas, insertando noticias, etc. 
                        </p>
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
                </div>
            ))}
        </div>
    )    
}

export default Proyectos