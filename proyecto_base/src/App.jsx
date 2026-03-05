import './App.css'
import Saludo from './components/Saludo';

function App() {
    const nombre = "Pepito";
    const apellido = "Pérez";
    const edad = 20;

    return (
        <>
            <h1>Hola {nombre} {apellido}</h1>
            <p>Tiene {edad + 1} Años </p>

            <Saludo nombre="juan" apellido="1" />
            <Saludo nombre="pedro" apellido="2" />
            <Saludo nombre="carlos" apellido="3" />
        </>
    )
}

export default App
