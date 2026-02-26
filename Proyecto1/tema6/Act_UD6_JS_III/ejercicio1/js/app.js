const url = "http://localhost:3000";

async function cargarAlumnos() {
    try {
        const response = await axios.get(`${url}/usuarios`)
        return response.data;
    } catch (err) {
        mostarMensaje(err);
        return false;
    }
}

async function cargarTareas() {
    try {
        const response = await axios.get(`${url}/tareas`)
        return response.data;
    } catch (err) {
        mostarMensaje(err);
        return false;
    }
}

function mostarMensaje($mensaje) {
    const contenedorInfo = document.getElementById("info");
    contenedorInfo.textContent = $mensaje;
}

async function iniciar() {
    try {
        let resultados = await Promise.all([cargarAlumnos(), cargarTareas()])
        let usuarios = resultados[0];
        let tareas = resultados[1];
        mostarMensaje(`Cargados ${usuarios.length} usuarios y ${tareas.length} tareas`)
        console.log(usuarios)
        console.log(`Tareas: ${tareas.length}`)
    } catch (err) {
        mostarMensaje(err);
    }
}
iniciar()
