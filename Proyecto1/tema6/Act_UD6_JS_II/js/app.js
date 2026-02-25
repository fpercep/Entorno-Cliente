const url = "http://localhost:3000/alumnos";
let idAlumno = null;

// =============================================
// Ejercicio 1 - Petición GET con .then / .catch
// =============================================

// axios.get(url)
//     .then(response => {
//         console.log("Objeto response completo:", response);
//         console.log("Datos obtenidos (response.data):", response.data);
//         response.data.forEach(alumno => {
//             console.log("Nombre del alumno:", alumno.nombre);
//         });
//     })
//     .catch(error => {
//         console.error("Error en la petición:", error.message);
//     });

// =============================================
// Funciones auxiliares
// =============================================

function mostrarMensaje(texto, tipo = "info") {
    const mensajeEstado = document.getElementById("mensaje-estado");
    mensajeEstado.textContent = texto;
    mensajeEstado.className = tipo;
    if (tipo !== "info") {
        setTimeout(() => {
            mensajeEstado.textContent = "";
            mensajeEstado.className = "";
        }, 3000);
    }
}

// =============================================
// Funciones de datos (CRUD)
// =============================================

async function cargarAlumnos() {
    try {
        mostrarMensaje("Cargando alumnos...", "info");
        const response = await axios.get(url);
        console.log("Objeto response completo:", response);
        console.log("Datos obtenidos (response.data):", response.data);
        response.data.forEach(alumno => {
            console.log("Nombre del alumno:", alumno.nombre);
        });
        mostrarMensaje("", "info");
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log("Código de estado HTTP:", error.response.status);
            mostrarMensaje("Error al cargar alumnos. Código: " + error.response.status, "error");
        } else {
            console.log(error.message);
            mostrarMensaje("Error de red al cargar alumnos: " + error.message, "error");
        }
        return [];
    }
}

async function obtenerAlumno(id) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
        } else {
            console.log(e.message);
        }
        return false;
    }
}

async function crearAlumnos(alumno) {
    try {
        await axios.post(url, alumno);
        mostrarMensaje("Alumno creado correctamente.", "exito");
        return true;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            mostrarMensaje("Error al crear alumno. Código: " + error.response.status, "error");
        } else {
            console.log(error.message);
            mostrarMensaje("Error de red al crear alumno: " + error.message, "error");
        }
        return false;
    }
}

async function editarAlumno(id, alumno) {
    try {
        await axios.put(`${url}/${id}`, alumno);
        mostrarMensaje("Alumno actualizado correctamente.", "exito");
        return true;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            mostrarMensaje("Error al editar alumno. Código: " + error.response.status, "error");
        } else {
            console.log(error.message);
            mostrarMensaje("Error de red al editar alumno: " + error.message, "error");
        }
        return false;
    }
}

async function eliminarAlumno(id) {
    try {
        const response = await axios.delete(`${url}/${id}`);
        console.log("Código de estado HTTP al eliminar:", response.status);
        mostrarMensaje("Alumno eliminado. Código HTTP: " + response.status, "exito");
        return true;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            mostrarMensaje("Error al eliminar alumno. Código: " + error.response.status, "error");
        } else {
            console.log(error.message);
            mostrarMensaje("Error de red al eliminar alumno: " + error.message, "error");
        }
        return false;
    }
}

// =============================================
// Funciones de UI
// =============================================

function mostrarAlumnos(alumnos) {
    let listaAlumnos = document.getElementById("lista-alumnos");
    listaAlumnos.innerHTML = "";
    for (const alumno of alumnos) {
        let li = document.createElement("li");
        li.textContent = `Nombre: ${alumno.nombre} - Email: ${alumno.email} - Curso: ${alumno.curso} `;

        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.addEventListener("click", () => mostrarAlumnoFormulario(alumno.id));
        li.appendChild(btnEditar);

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", async () => {
            if (!confirm("¿Estás seguro de que deseas eliminar este alumno?")) return;
            const exito = await eliminarAlumno(alumno.id);
            if (exito) {
                let alumnos = await cargarAlumnos();
                mostrarAlumnos(alumnos);
            }
        });
        li.appendChild(btnEliminar);

        listaAlumnos.appendChild(li);
    }
}

async function mostrarAlumnoFormulario(id) {
    let alumno = await obtenerAlumno(id);
    let titulo = document.getElementById("titulo-alumno");
    titulo.textContent = `Editar alumno`;
    document.getElementById("nombre").value = alumno.nombre;
    document.getElementById("email").value = alumno.email;
    document.getElementById("curso").value = alumno.curso;
    idAlumno = alumno.id;
}

function limpiarFormulario() {
    let titulo = document.getElementById("titulo-alumno");
    titulo.textContent = `Añadir Nuevo Alumno`;
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("curso").value = "";
    idAlumno = null;
}

// =============================================
// Event Listener del formulario
// =============================================

let formulario_alumno = document.getElementById("formulario-alumno");
formulario_alumno.addEventListener("submit", async (e) => {
    e.preventDefault();
    let alumno = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        curso: document.getElementById("curso").value,
    }
    let exito = false
    if (!idAlumno) {
        exito = await crearAlumnos(alumno);
    } else {
        exito = await editarAlumno(idAlumno, alumno);
    }

    if (exito) {
        formulario_alumno.reset();
        let alumnos = await cargarAlumnos();
        mostrarAlumnos(alumnos);
        limpiarFormulario();
    }
})

// =============================================
// Inicio de la aplicación
// =============================================

async function iniciarApp() {
    let alumnos = await cargarAlumnos()
    mostrarAlumnos(alumnos);
}

iniciarApp();
