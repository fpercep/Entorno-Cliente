function Tarjeta({ titulo, descripcion, fecha }) {
    return (
        <div className="tarjeta-container">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <small>{fecha}</small>
        </div>
    );
}

export default Tarjeta;