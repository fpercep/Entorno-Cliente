function calcular_area_perimetro(altura, ancho) {
    console.log("Area:" + altura * ancho);
    console.log("Perimetro:" + (2*(altura + ancho)));
}
let input1 = 12;
let input2 = 6;
calcular_area_perimetro(input1, input2);
calcular_area_perimetro(input2, input1);