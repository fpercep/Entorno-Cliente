function Proyectos({proyectos}) {
    return (
        <div>
            {
                proyectos.map((proyecto) => (
                    <div className="proyecto" key={proyecto.id}>
                        <>
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                        </>
                    </div>
                ))
            }
        </div>
    );
}

export default Proyectos;