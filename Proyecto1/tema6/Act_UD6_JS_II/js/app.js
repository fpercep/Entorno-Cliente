const url = "http://localhost:3000/alumnos";
iniciarApp();
let formulario_alumno = document.getElementById("formulario-alumno");
formulario_alumno.addEventListener("submit", async (e) => {
    e.preventDefault();
    let alumno = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        curso: document.getElementById("curso").value,
    }
    const exito = await crearAlumnos(alumno);
    if (exito) {
        formulario_alumno.reset();
        let alumnos = await cargarAlumnos();
        mostrarAlumnos(alumnos);
    }
})

async function cargarAlumnos() {
    const mensajeEstado = document.getElementById("mensaje-estado");
    try {
        mensajeEstado.textContent = "Cargando alumnos...";
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get(url);
        console.log("Datos con async/await:", response.data);
        mensajeEstado.textContent = "";
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
        } else {
            console.log(error.message);
        }
        return [];
    }
}

function mostrarAlumnos(alumnos) {
    let listaAlumnos = document.getElementById("lista-alumnos");
    listaAlumnos.innerHTML = "";
    for (const alumno of alumnos) {
        let li = document.createElement("li");
        li.textContent = `Nombre: ${alumno.nombre} - Email: ${alumno.email} - Curso: ${alumno.curso}`;
        listaAlumnos.appendChild(li);
    }
}

async function iniciarApp() {
    let alumnos = await cargarAlumnos()
    mostrarAlumnos(alumnos);
}

async function crearAlumnos(alumno) {
    try {
        const response = await axios.post(url, alumno);
        return true;
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
        } else {
            console.log(error.message);
        }
        return false;
    }
}