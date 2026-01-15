const primerPlan = document.querySelector('.plan');
const btnSeleccionar = document.querySelector('#btnSeleccionar');
const primerH3 = document.querySelector('h3');
const resultado = document.querySelector('#resultado');

btnSeleccionar.addEventListener('click', function()
{
    primerPlan.classList.add('seleccionado');
    primerH3.textContent = "Plan seleccionado";
    resultado.textContent = "Has selecionado el plan básico";
})


