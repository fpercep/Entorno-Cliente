const select = document.getElementById('usuarios');
const url = "http://localhost:3000";

select.addEventListener('change',  async (event) => {
    await listarTareas(event.target.value)
})

async function cargarUsuarios() {
    try {
        console.log("Cargando usuarios...");
        const response = await axios.get(`${url}/usuarios`);
        return response.data;
    } catch (e) {
        console.log(`Error al cargar usuarios: ${e}`);
        return [];
    }
}

async function listarUsuarios() {
    const usuarios = await cargarUsuarios()

    let option = document.createElement("option");
    option.textContent = "Todos";
    option.value = "";
    select.appendChild(option);

    for (const usuario of usuarios) {
        let option = document.createElement("option");
        option.textContent = usuario.nombre;
        option.value = usuario.id;
        select.appendChild(option);
    }
}

async function cargarTareas(filter = "") {
    try {
        console.log("Cargando tareas...");
        const query= (filter) ? `tareas?userId=${filter}` : "tareas";
        const response = await axios.get(`${url}/${query}`);
        return response.data;
    } catch (e) {
        console.log(`Error al cargar tareas: ${e}`);
        return [];
    }
}

async function listarTareas(filter = "") {
    const tareas = await cargarTareas(filter);
    const lista = document.getElementById("tareas");
    lista.innerHTML = "";
    for (const tarea of tareas) {
        let li = document.createElement("li");
        li.textContent = `${tarea.titulo} - `;
        li.textContent +=  (tarea.completada) ? "Completa" : "Incompleta";
        lista.appendChild(li);
    }
}

listarUsuarios()
listarTareas()
