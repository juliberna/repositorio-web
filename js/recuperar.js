function validarDatos(){
    document.addEventListener("DOMContentLoaded", function() {
        const email = document.getElementById("email");
        const nombreUsuario = document.getElementById("nombreusuario");
        const botonEnviar = document.getElementById("boton-enviar");
    
        botonEnviar.querySelector('a').style.pointerEvents = 'none';
        botonEnviar.querySelector('a').style.opacity = '0.5';
    
        const validarCampos = () => {
            let valid = true;
    
            if (!email.value) {
                valid = false;
            }
    
            if (!nombreUsuario.value) {
                valid = false;
            }
    
    
            if (valid) {
                botonEnviar.querySelector('a').style.pointerEvents = 'auto';
                botonEnviar.querySelector('a').style.opacity = '1';
            } else {
                botonEnviar.querySelector('a').style.pointerEvents = 'none';
                botonEnviar.querySelector('a').style.opacity = '0.5';
            }
        };
    
    
        email.addEventListener("input", validarCampos);
        nombreUsuario.addEventListener("input", validarCampos);
    
        botonEnviar.addEventListener("click", function(event) {
    
            if (botonEnviar.querySelector('a').style.pointerEvents === 'none') {
                event.preventDefault();
            }
        });
    });
}

validarDatos();
