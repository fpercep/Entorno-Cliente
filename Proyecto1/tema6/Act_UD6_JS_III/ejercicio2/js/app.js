const urlDB = "http://localhost:3000";

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = "Bearer MI_TOKEN_123";
        console.log(`peticion enviada ${config.url}`);
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

async function obtenerUsuarios() {
    try {
        const respuesta = await axios.get(`${urlDB}/usuarios`);

        console.log("Datos recibidos:", respuesta.data);
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
    }
}

// Ejecución
obtenerUsuarios()