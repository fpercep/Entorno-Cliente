function Detalles({ titulo, parrafo }) {
    return (
        <>
            <DetallesTitulo titulo={titulo} />
            <DetallesParrafo parrafo={parrafo} />
        </>
    );
}

function DetallesTitulo({ titulo }) {
    return <h1>{titulo}</h1>;
}

function DetallesParrafo({ parrafo }) {
    return <p>{parrafo}</p>;
}

export default Detalles;