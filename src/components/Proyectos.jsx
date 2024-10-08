import "../CSS/Proyectos.css"

const Proyectos = () => {
    const proyectos = [
        {img: "/vikings.webp"}
    ]

    return (
        <div className="flex content-center">
            {proyectos.map((p, idx) => (
                <div className="proy-container">
                    <img
                      className="proy-img"
                      src={p.img}
                    />
                    <div className="proy-text">
                        <p> Mira qué chulo mi proyecto </p>
                    </div>
                </div>
            ))}
        </div>
    )    
}

export default Proyectos