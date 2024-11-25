import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiOcaml, SiExpress, SiMongodb, SiGithubactions } from "react-icons/si";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "../CSS/Proyectos.css"
import { Button, ScrollShadow, Tooltip } from "@nextui-org/react";
import Skill from "./Skill";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useState } from "react";

const Proyectos = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [proyecto, setProyecto] = useState(null);

    const proyectos = [
        {
            img: "/Portfolio/vikings.webp",
            title: "Viking Brothers Gym Web",
            skills: [
                "React",
                "JavaScript",
                "GitHub",
                "GitHub Actions",
                "TailwindCSS",
            ],
            description: [
                "En uno de mis veranos como estudiante, propuse a los dueños de mi gimnasio la idea de crearles su propia página web.",
                "Pese a tratarse de un proyecto sencillo dadas las necesidades del gimnasio, me siento muy orgulloso de contribuir a dar a conocer el negocio.",
                "Además, también mantengo la web para informar a los clientes actualizando los horarios de las clases, tarifas, insertando noticias, etc."
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
                "TailwindCSS",
            ],
            description: [
                "🏆 Primer Premio en Retos de Circularidad en las Jornadas WAS-Circulamos.",
                "Se proponía diseñar un sistema para reducir la compra de mobiliario nuevo, en la Universidad.",
                "Este prototipo se trata de una plataforma al estilo Wallapop que permite el intercambio de material entre distintos departamentos de la universidad."
            ],

            gitHub: "https://github.com/josemifd/unizircle",
            url: "https://josemifd.github.io/unizircle/"
        }
    ]

    return (
        <div className="flex flex-col sm:flex-row items-center gap-2 justify-around">
            {proyectos.map((p, idx) => (
                <div key={idx} className="img-proy" onClick={() => {setProyecto(p); onOpen()}}>
                    <img 
                      className="img max-w-[400px] sm:w-[30vw] w-[60vw]"
                      src={p.img}
                    />
                    <p className="img-text">
                        +
                    </p>
                </div>
            ))}

        <Modal 
            classNames={{
                base: "bg-[#303030]"
            }}
            size="5xl" 
            isOpen={isOpen} 
            onClose={onClose}
        >
            <ModalContent>
              {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1 text-[2rem]">
                        {proyecto.title} 
                    </ModalHeader>
                    <ModalBody>
                        <ul className="proy-skills w-[100%] flex flex-wrap mb-[10px] text-[2rem]">
                            {proyecto.skills.map((skill, idx) => (
                                <li key={idx} className="proy-skill">
                                    <Skill name={skill}/>
                                </li>
                            ))}
                        </ul>
                        {proyecto.description.map((p, idx) => (
                            <p key={idx}>
                                {p}
                            </p>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Tooltip className="bg-background text-white" content="Repositorio">
                            <Button 
                                color="primary"
                                onClick={() => window.open(proyecto.gitHub, '_blank')}
                            >
                                <FaGithub className="text-2xl text-white"/>
                            </Button>
                        </Tooltip>
                        <Tooltip className="bg-background text-white" content="Ver web">
                            <Button 
                                color="primary"
                                onClick={() => window.open(proyecto.url, '_blank')}
                            >
                                <FaExternalLinkAlt className="text-xl text-white"/>
                            </Button>
                        </Tooltip>
                    </ModalFooter>
                </>
              )}
            </ModalContent>
        </Modal>
        </div>
        // <div className="flex-col justify-center items-center">
        //     {proyectos.map((p, idx) => (
        //         <div key={idx} 
        //              className="proy-container bg-background p-[20px] rounded-2xl border-[1px] flex mb-[50px] items-start">
        //             {(idx % 2 === 0) && (
        //                 <div className="w-[50%] mr-[10px]">
        //                     <img className="proy-img rounded-2xl" src={p.img} />
        //                     <div className="proy-links space-x-2 w-full mt-[10px] justify-center flex items-center">
        //                         <Tooltip className="bg-background text-white" content="Repositorio">
        //                             <Button 
        //                                 color="primary"
        //                                 onClick={() => window.open(p.gitHub, '_blank')}
        //                             >
        //                                 <FaGithub className="text-2xl text-white"/>
        //                             </Button>
        //                         </Tooltip>
        //                         <Tooltip className="bg-background text-white" content="Ver web">
        //                             <Button 
        //                                 color="primary"
        //                                 onClick={() => window.open(p.url, '_blank')}
        //                             >
        //                                 <FaExternalLinkAlt className="text-xl text-white"/>
        //                             </Button>
        //                         </Tooltip>
        //                     </div>
        //                 </div>
        //             )}
        //             <div className="max-w-[50%]">
        //                 <h2 className="mb-[5px]"> {p.title} </h2>
        //                 <ul className="proy-skills w-[100%] flex flex-wrap mb-[10px] text-[2rem]">
        //                     {p.skills.map((skill, idx) => (
        //                         <li key={idx} className="proy-skill">
        //                             <Skill name={skill}/>
        //                         </li>
        //                     ))}
        //                 </ul>
        //                 {p.description.map((des, idx) => (
        //                     <p className="mb-[5px]" key={idx}> {des} </p>
        //                 ))}
        //             </div>
        //             {(idx % 2 !== 0) && (
        //                 <div className="w-[50%] mr-[10px]">
        //                     <img className="proy-img rounded-2xl" src={p.img} />
        //                     <div className="proy-links space-x-2 mt-[10px] w-full justify-center flex items-center">
        //                         <Tooltip className="bg-background text-white" content="Repositorio">
        //                             <Button 
        //                                 color="primary"
        //                                 onClick={() => window.open(p.gitHub, '_blank')}
        //                             >
        //                                 <FaGithub className="text-2xl text-white"/>
        //                             </Button>
        //                         </Tooltip>
        //                         <Tooltip className="bg-background text-white" content="Ver web">
        //                             <Button 
        //                                 color="primary"
        //                                 onClick={() => window.open(p.url, '_blank')}
        //                             >
        //                                 <FaExternalLinkAlt className="text-xl text-white"/>
        //                             </Button>
        //                         </Tooltip>
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //     ))}
        // </div>
    )    
}

export default Proyectos