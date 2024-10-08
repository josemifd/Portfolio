import { Tooltip } from "@nextui-org/react"
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiOcaml, SiExpress, SiMongodb } from "react-icons/si";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import "../CSS/Habilidades.css"

const Habilidades = () => {
    const habilidades = [
        { logo: <FaReact className="text-react"/>, alt: "React" },
        { logo: <IoLogoJavascript className="text-javascript"/>, alt: "JavaScript" },
        { logo: <FaHtml5 className="text-html"/>, alt: "HTML" },
        { logo: <FaCss3Alt className="text-css"/>, alt: "CSS" },
        { logo: <SiCplusplus className="text-c++"/>, alt: "C++" },
        { logo: <FaJava className="text-java"/>, alt: "Java" },
        { logo: <SiExpress className="text-black"/>, alt: "Express" },
        { logo: <SiMongodb className="text-mongodb"/>, alt: "MongoDB" },
        { logo: <FaGithub className="text-black"/>, alt: "GitHub" },
        { logo: <SiOcaml className="text-ocaml"/>, alt: "OCaml" },

    ]

    return (
        <ul className="iconos-hab">
            {habilidades.map((h, idx) => (
                <li key={idx} className="icono-hab">
                    <div className="icono-img"> {h.logo} </div>
                </li>
            ))}
        </ul>
    )
}

export default Habilidades