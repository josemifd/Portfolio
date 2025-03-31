import "../CSS/Habilidades.css"
import Skill from "./Skill";

const Habilidades = () => {
    const habilidades = [
        "React",
        "JavaScript",
        "HTML",
        "CSS" ,
        "C++" ,
        "Python",
        "Java",
        "Express",
        "MongoDB",
        "GitHub",
        "GitHub Actions",
        "OCaml",
        "TailwindCSS",
        "Supabase",
        "Ionic"
    ]

    return (
        <ul className="iconos-hab ">
            {habilidades.map((h, idx) => (
                <li key={idx} className="mr-7 mb-7">
                    <Skill name={h}/>
                </li>
            ))}
        </ul>
    )
}

export default Habilidades