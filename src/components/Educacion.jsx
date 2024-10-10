import "../CSS/Educacion.css"

const Educacion = () => {
    const educacion = [
        {
            title: "Grado en Ingeniería Informática",
            subtitle: "Universidad de Zaragoza",
            years: "Sept. 2021 - actualidad",
            description: [],
            list: [
                "Mejor expediente académico 1er curso",
                "8 Matrículas de Honor",
                "Media expediente: 8.50"
            ]
        },
        {
            title: "Técnicas avanzadas de programación: el paradigma funcional",
            subtitle: "Universidad de Zaragoza",
            years: "Jul. 2024 - Ago. 2024",
            description: [
                "Curso impartido en la Universidad de Zaragoza en el que pude profundizar en técnicas de programación funcional. Para ello, aprendí uno de los principales lenguajes de programación funcional moderna: OCaml."
            ],
            list: [
            ]
        },
        {
            title: "Inglés B1",
            subtitle: "Escuela Oficial de Idiomas",
            years: "Oct. 2019",
            description: [
                "Actualmente me encuentro estudiando para obtener el B2."
            ],
            list: [
            ]
        }

    ]

    return (
        <>
            {educacion.map((e, index) => (
                <div key={index} className="ex-wrapper h-full flex my-5">
                    <div className="line"/>
                    <div className="ex-item">
                        <div className="titles">
                            <h3> {e.title} </h3>
                            <p className="fecha text-end opacity-70 mb-3"> {e.years} </p>
                        </div>
                        <h4> {e.subtitle} </h4>
                        <div className="info">
                            <ul>
                                {e.description.map((line, idx) => (
                                    <li key={idx}>
                                        <p className="text-start"> {line} </p>
                                    </li>
                                ))}
                            </ul>
                            <ul className="ml-5">
                                {e.list.map((line, idx) => (
                                    <li key={idx} className="list-disc">
                                        <p className="text-start"> {line} </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Educacion