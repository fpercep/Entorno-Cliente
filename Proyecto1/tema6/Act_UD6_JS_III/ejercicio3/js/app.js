const url = "http://localhost:3000/tareas";

axios.interceptors.response.use(
    ouput => {
        return ouput;
    }, error => {
        if (error.response.status === 401) {
            alert("Usuario no autorizado");
        }else {
            console.log(error.message);
        }
        return Promise.reject(error);
    }
)

async function obtenerTareas() {
    try {
        const respuesta = await axios.get(url);

        console.log("Datos recibidos:", respuesta.data);
    } catch (error) {
        console.error("Error al obtener tareas:", error.message);
    }
}

obtenerTareas();
