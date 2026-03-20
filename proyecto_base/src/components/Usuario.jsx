function Usuario({ nombre, edad }) {
    const isAdult = edad >= 18;
    const estado = isAdult ? "Mayor de edad" : "Menor de edad";
    const statusClass = isAdult ? "status-adult" : "status-minor";
    
    return (
        <div className="user-card">
            <p>
                <strong>{nombre}</strong> ({edad} años) - 
                <span className={`user-status ${statusClass}`}>{estado}</span>
            </p>
        </div>
    );
}

export default Usuario;