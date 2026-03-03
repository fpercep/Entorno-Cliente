const url = "http://localhost:3000/usuarios";

const formUsuario = document.getElementById("formUsuario");

formUsuario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    const usuario = {
        nombre: nombre,
        email: email,
    }

    await createUsuario(usuario);
    formUsuario.reset()
})

async function cargarUsuarios() {
    try {
        const respuesta = await axios.get(url);
        return respuesta.data;
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
        return [];
    }
}

async function createUsuario(usuario) {
    try {
        const respuesta = await axios.post(url, usuario);
        if (respuesta.data) {
            alert("¡Usuario creado con éxito!");
            await actualizarLista()
        }
    } catch (error) {
        console.error("Error al crear el usuarios:", error.message);
    }
}

async function actualizarLista() {
    const lista = document.getElementById("lista-usuarios");
    lista.innerHTML = "";
    let usuarios = await cargarUsuarios();
    for (const usuario of usuarios) {
        let li = document.createElement('li');
        li.textContent = `${usuario.nombre} (${usuario.email})`;
        lista.appendChild(li);
    }
}

actualizarLista()