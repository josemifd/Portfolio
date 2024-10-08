import "../CSS/Experiencia.css"

const Experiencia = () => {

    const experiencia = [
        {
            title: "Viking Brothers Gym Web",
            subtitle: "Freelance",
            years: "2024-actualidad",
            description: [
                "Propuse a los dueños de mi gimnasio realizar la página web de su negocio. Mantengo la página actualizada para que dispongan de un medio de información y captación de clientes.",
            ],
            list: [
            ]
        },
        {
            title: "Universidad de Zaragoza",
            subtitle: "Grado en Ingeniería Informática",
            years: "2021-2025",
            description: [
            ],
            list: [
                "Mejor expediente académico 1er curso",
                "8 Matrículas de Honor",
                "Media expediente: 8.50"
            ]
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