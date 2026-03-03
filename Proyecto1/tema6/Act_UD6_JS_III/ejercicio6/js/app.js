const url = "http://localhost:3000";

axios.interceptors.response.use(
    output => {
        return output;
    }, error => {
        if (error.response && error.response.status === 401) {
            alert("Usuario no autorizado");
        } else {
            console.log(error.message);
        }
        return Promise.reject(error);
    }
)

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = "Bearer MI_TOKEN_123";
        console.log(`peticion enviada ${config.url}`);
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

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

async function cargarTareas() {
    try {
        const response = await axios.get(`${url}/tareas`)
        return response.data;
    } catch (e) {
        console.log(`Error al cargar tareas: ${e}`);
        return [];
    }
}

async function generarResumen() {
    let resultados = await Promise.all([cargarUsuarios(), cargarTareas()])
    let usuarios = resultados[0];
    let tareas = resultados[1];

    for (const usuario of usuarios) {
        usuario.completadas = tareas.filter((t) => Number(t.userId) === Number(usuario.id) && t.completada).length;
        usuario.pendientes = tareas.filter((t) => Number(t.userId) === Number(usuario.id) && !t.completada).length;
    }

    return usuarios;
}

async function mostrarUsuarios() {
    try {
        const resumen = document.getElementById("resumen");
        for (const usuario of await generarResumen()) {
            let li = document.createElement("li");
            li.textContent = `${usuario.nombre} - Tareas Completadas: ${usuario.completadas} -  Tareas pendientes : ${usuario.pendientes}`;
            resumen.appendChild(li);
        }
    } catch (e) {
        console.log(`Error al mostrar usuarios: ${e}`);
    }
}

mostrarUsuarios();