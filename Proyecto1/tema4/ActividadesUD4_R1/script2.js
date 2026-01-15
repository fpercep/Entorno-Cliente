let descripcionAct2 = document.getElementById("descripcion");
let btnOcultar = document.getElementById('btnOcultar');
let btnMostrar = document.getElementById('btnMostrar');

btnOcultar.addEventListener('click', function () {
    descripcionAct2.style.display = 'none';
    btnOcultar.innerHTML = "Descripción oculta";
    btnMostrar.innerHTML = "Mostrar descripción";
});

btnMostrar.addEventListener('click', function () {
    descripcionAct2.style.display = "block";
    btnMostrar.textContent = "Descripción visible";
    btnOcultar.textContent = "Ocultar descripción";
});

