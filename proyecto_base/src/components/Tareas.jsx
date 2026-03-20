function Tareas({ tareas }) {
    return (
        <div className="tasks-container">
            <h3>Lista de Tareas</h3>
            <ul className="tasks-list">
                {tareas.map(item => (
                    <li key={item.id} className="task-item">{item.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tareas;