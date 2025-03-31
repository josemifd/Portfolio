import { IoLogoIonic, IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiOcaml, SiExpress, SiMongodb, SiGithubactions } from "react-icons/si";
import { FaPython, FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { Tooltip } from "@nextui-org/react";
import "../CSS/Skill.css"

const Skill = ({name}) => {
    const habilidades = [
        { logo: <FaReact className="text-react"/>, alt: "React" },
        { logo: <IoLogoJavascript className="text-javascript"/>, alt: "JavaScript" },
        { logo: <FaHtml5 className="text-html"/>, alt: "HTML" },
        { logo: <FaCss3Alt className="text-css"/>, alt: "CSS" },
        { logo: <SiCplusplus className="text-c++"/>, alt: "C++" },
        { logo: <FaPython className="text-[#3473a4]"/>, alt: "Python"},
        { logo: <FaJava className="text-java"/>, alt: "Java" },
        { logo: <SiExpress className="text-black"/>, alt: "Express" },
        { logo: <SiMongodb className="text-mongodb"/>, alt: "MongoDB" },
        { logo: <FaGithub className="text-white"/>, alt: "GitHub" },
        { logo: <SiOcaml className="text-ocaml"/>, alt: "OCaml" },
        { logo: <SiGithubactions className="text-c++"/>, alt: "GitHub Actions" },
        { logo: <RiTailwindCssFill className="text-[#37bcf7]"/>, alt: "TailwindCSS" },
        { logo: <RiSupabaseFill className="text-[#3ecd89]"/>, alt: "Supabase" },
        { logo: <IoLogoIonic className="text-[#176bff]"/>, alt: "Ionic" },
    ]

    // Buscar la habilidad que coincida con el 'alt' proporcionado
    const habilidad = habilidades.find((h) => h.alt === name);

    return (
        <Tooltip className="bg-background text-white" content={name}>
            <div className="icono-hab">
                {habilidad ? habilidad.logo : <p>Skill not found</p>}
            </div>
        </Tooltip>
    )}

export default Skill