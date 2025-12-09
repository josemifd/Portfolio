import "../CSS/Experiencia.css"

const Experiencia = () => {

    const experiencia = [
        {
            title: "Desarrollador Web Full-Stack",
            subtitle: "Fútbol Emotion",
            years: "Ago. 2025 - actualidad",
            description: [
                "Mantenimiento, mejora y desarrollo de soluciones web para una plataforma de e-commerce. Participo en proyectos que mejoran la calidad de la web centrado en un rendimiento óptimo del backend para dar una buena experiencia de usuario.",
            ],
            list: []
        },
        {
            title: "Viking Brothers Gym Web",
            subtitle: "Freelance",
            years: "2024 - actualidad",
            description: [
                "Propuse a los dueños de mi gimnasio realizar la página web de su negocio. Mantengo la página actualizada para que dispongan de un medio de información y captación de clientes.",
            ],
            list: []
        },
        {
            title: "Prácticas en ElectrUZherapy",
            subtitle: "Universidad de Zaragoza",
            years: "Feb. 2025 - Jul. 2025",
            description: [
                "En mi TFG, trabajé en colaboración con el departamento de Fisioterapia de la Universidad de Zaragoza. Construí una aplicación docente multiplataforma para la simulación de dispositivos de electroterapia."
            ],
            list: []
        }
    ]

    return (
        <>
            {experiencia.map((e, index) => (
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

export default Experiencia