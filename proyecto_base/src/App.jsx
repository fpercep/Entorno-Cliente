import './App.css'
import './assets/dashboard.css'
import Saludo from './components/Saludo';
import Detalles from './components/Detalles';
import Proyectos from "./components/Proyectos.jsx";
import Tarjeta from "./components/Tarjeta";
import Usuario from "./components/Usuario.jsx";
import Header from "./components/Header.jsx";
import Tareas from "./components/Tareas.jsx";

function App() {
    const nombre = "Pepito";
    const apellido = "Pérez";
    const edad = 20;

    const tareas = [
        {id: 101, nombre: 'Instalar Node'},
        {id: 102, nombre: 'Crear proyecto Vite'},
        {id: 103, nombre: 'Configurar React'}
    ];

    const usuario = {
        nombre: "Laura", apellido: "Gómez",
        edad: 17
    };

    const estiloCaja = {
        color: "red",
        padding: '25px',
        border: '1px solid blue',
        borderRadius: '15px',
    }

    const proyectos = [
        {id: 101, titulo: 'Instalar Node', descripcion: 'Texto 1'},
        {id: 102, titulo: 'Instalar Node 1', descripcion: 'Texto 2'},
        {id: 103, titulo: 'Instalar Node 2', descripcion: 'Texto 3'}
    ]

    const usuarios = [
        {
            nombre: "José", apellido: "Pérez", edad: 19
        }, {
            nombre: "Pedro", apellido: "Antonio", edad: 21
        }, {
            nombre: "Carlos", apellido: "Apellido", edad: 67
        },
    ]

    const misTarjetas = [
        {
            id: 1,
            titulo: 'Aprender React',
            descripcion: 'Entender el flujo de datos y componentes.',
            fecha: '2024-03-20'
        },
        {
            id: 2,
            titulo: 'Dominar JSX',
            descripcion: 'Practicar la renderización de listas y fragmentos.',
            fecha: '2024-03-21'
        },
        {
            id: 3,
            titulo: 'Uso de Props',
            descripcion: 'Pasar información dinámica entre padre e hijo.',
            fecha: '2024-03-22'
        }
    ];

    const nombres = obtenerNombres(usuarios);

    return (
            <div className="dashboard-container">
                {/*Actividad 1:*/}
                <section className="exercise-section">
                    <h1>Hola {nombre} {apellido}</h1>
                    <p>Tiene {edad + 1} Años </p>
                </section>

                {/*Actividad 2:*/}
                <section className="exercise-section">
                    <Saludo nombre="juan" apellido="1" />
                    <Saludo nombre="pedro" apellido="2" />
                    <Saludo nombre="carlos" apellido="3" />
                </section>

                {/*Actividad 3:*/}
                <section className="exercise-section">
                    {/*La key es un identificador único que utiliza React durante el proceso de reconciliación
                    para rastrear elementos en una lista. Esto le permite actualizar, mover o reutilizar nodos
                    del DOM de forma eficiente sin tener que destruirlos y recrearlos desde cero.*/}
                    <ul>
                        {
                            tareas.map(
                                item => <li key={item.id}> {item.nombre}</li>
                            )
                        }
                    </ul>
                </section>

                {/*Actividad 4:*/}
                <section className="exercise-section">
                    <h1>{usuario.nombre} {usuario.apellido}</h1>
                    <p>{esMayorEdad(usuario)}</p>
                </section>

                {/*Actividad 5*/}
                <section className="exercise-section">
                    <Detalles titulo={"Titulo"} parrafo={"Este es un parrafo"} />
                </section>

                {/*Activida 6:*/}
                <section className="exercise-section">
                    <div className="caja" style={estiloCaja}>
                        <AlertButton message="Has pulsado el botón">
                            Saludar
                        </AlertButton>
                    </div>
                </section>

                {/*Actividad 7:*/}
                <section className="exercise-section">
                    <Proyectos proyectos={proyectos}/>
                </section>

                {/*Actividad 8:*/}
                <section className="exercise-section">
                    {/*Razones para separar la lógica de presentación:*/}
                    {/*1. Reutilizanción*/}
                    {/*2. Testabilidad*/}
                    {/*3. Legibilidad */}
                    <div>
                        <ul>
                            {nombres.map((nombre, index) => (
                                <li key={index} >{nombre}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/*Actividad 9:*/}
                <section className="exercise-section">
                    {misTarjetas.map((tarjeta) => (
                        <Tarjeta key={tarjeta.id} titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} fecha={tarjeta.fecha}/>
                    ))}
                </section>

                {/*Actividad 10:*/}
                <section className="exercise-section">
                    <Header titulo={"Mi Web"}/>
                    <Usuario nombre={"Juan"} edad={12}/>
                    <Tareas tareas={tareas}/>
                </section>
            </div>
    )
}

function AlertButton({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function esMayorEdad(usuario) {
    return (usuario.edad >= 18) ? "Mayor de edad" : "Menor de edad";
}

function obtenerNombres(usuarios) {
    return usuarios.map(usuario => usuario.nombre)
}

export default App
