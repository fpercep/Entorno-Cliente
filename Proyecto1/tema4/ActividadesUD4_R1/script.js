
    //Actividad 1:
    function validarFormulario () {
        let msg = document.getElementById('msg');
        let nombre = document.getElementById('nombre').value.trim();
        let apellidos = document.getElementById('apellidos').value.trim();
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById('password').value.trim();
        let edad = document.getElementById('edad').value.trim();

        msg.innerHTML = "";

        const regexpNoLetra = /^[a-záéíóúñ ]+$/i;
        const regexpEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        const regexPassword = /^(?=.*[a-zñáéíóú])(?=.*\d).{8,}$/i;


        try {
            if (nombre === "") throw "Nombre no puede estar vacío.";
            if (apellidos === "") throw "Apellidos no puede estar vacío.";
            if (email === "") throw "Email no puede estar vacío.";
            if (password === "") throw "Contraseña no puede estar vacío.";
            if (edad === "") throw "Edad no puede estar vacío.";

            if (!regexpNoLetra.test(nombre)) throw "Nombre  solo puede tener letras";
            if (!regexpNoLetra.test(apellidos)) throw "Apellidos  solo puede tener letras";
            if (regexpEmail.test(email)) throw "Email debe tener el formato nombre@dominio.extensión ";
            if (regexPassword.test(password)) throw "Contraseña debe al menos una letra y un numero, ademas de una extensión minima de 8";

            if (isNaN(edad)) throw "La edad debe ser un número.";
            if (edad > 99 || edad < 18) throw "La edad debe estar entre 18 y 99.";
        } catch (e) {
            msg.innerHTML = "Resultado: " + e;
        }
    }

    //Actividad 1:
    let descripcionAct2 = document.getElementById("descripcion");
    let btnOcultar = document.getElementById('btnOcultar');
    let btnMostrar = document.getElementById('btnMostrar');

    btnOcultar.addEventListener('click', function () {
        descripcionAct2.style.display = 'none';
    });

    btnMostrar.addEventListener('click', function () {
        descripcionAct2.style.display = "block";
    });

