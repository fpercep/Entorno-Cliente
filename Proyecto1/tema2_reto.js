let num1 = parseInt(prompt("Introduzca el primer numero"));
let num2 = parseInt(prompt("Introduzca el segundo numero"));

function calcularTotal(va1, va2) {
    let suma = va1 + va2;
    let resta = va1 - va2;
    let multi = va1 * va2;
    let division = va1 / va2;

    let resultado = `
        Suma: ${va1} + ${va2} = ${suma}
        Resta: ${va1} - ${va2} = ${resta}
        Multiplicación: ${va1} × ${va2} = ${multi}
        División = ${va1} / ${va2} = ${division}
    `;

    alert(resultado);
    console.log(resultado);
}

calcularTotal(num1, num2);