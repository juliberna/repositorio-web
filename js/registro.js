function validarDatos() {
  document.addEventListener("DOMContentLoaded", function() {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const nombreUsuario = document.getElementById("nombreusuario");
    const contraseña = document.getElementById("contraseña");
    const repetirContraseña = document.getElementById("repetircontraseña");
    const confirmar = document.getElementById("confirmar");
    const tarjetaCredito = document.getElementById("tarjeta-credito");
    const cvv = document.getElementById("tarjeta-credito-cvv");
    const errorMessageTarjeta = document.getElementById("error-message-tarjeta");

    
    confirmar.querySelector('a').style.pointerEvents = 'none';
    confirmar.querySelector('a').style.opacity = '0.5';

    const validarCampos = () => {
        let valid = true;

        if (!/^[a-zA-Z]+$/.test(nombre.value)) {
            valid = false;
        }

        if (!/^[a-zA-Z]+$/.test(apellido.value)) {
            valid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            valid = false;
        }

        if (!/^[a-zA-Z0-9]+$/.test(nombreUsuario.value)) {
            valid = false;
        }

        if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(contraseña.value)) {
            valid = false;
        }

        if (contraseña.value !== repetirContraseña.value) {
            valid = false;
        }

        if (!/^[1-9]{3}$/.test(cvv.value)) {
            valid = false;
        }

        if (valid) {
            confirmar.querySelector('a').style.pointerEvents = 'auto';
            confirmar.querySelector('a').style.opacity = '1';
        } else {
            confirmar.querySelector('a').style.pointerEvents = 'none';
            confirmar.querySelector('a').style.opacity = '0.5';
        }
    };

    nombre.addEventListener("input", validarCampos);
    apellido.addEventListener("input", validarCampos);
    email.addEventListener("input", validarCampos);
    nombreUsuario.addEventListener("input", validarCampos);
    contraseña.addEventListener("input", validarCampos);
    repetirContraseña.addEventListener("input", validarCampos);
    tarjetaCredito.addEventListener("input", validarCampos);
    cvv.addEventListener("input", validarCampos);

    confirmar.addEventListener("click", function(event) {
        event.preventDefault();

        validarCampos();

        if (confirmar.querySelector('a').style.pointerEvents === 'none') {
            return;
        }

        window.location.href = "../index.html";
    });
});

}

validarDatos();
