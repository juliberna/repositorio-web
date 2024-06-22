const botonInicio = document.getElementById("boton-inicio");
const botonEnviar = document.getElementById("boton-enviar");

if(botonInicio){
    validarInicio();
} else if(botonEnviar){
    validarDatosContrasenia();
    validarCampos();
}

function validarInicio() {
    document.getElementById("boton-inicio").addEventListener("click", function(event) {
        const nombreUsuario = document.getElementById("nombreusuario").value;
        const contrasenia = document.getElementById("contraseña").value;
    
        let formularioValido = true;
    
        if(nombreUsuario.trim() === ""){
            alert("Por favor, ingrese su nombre de usuario");
            formularioValido = false;
        }
    
        if(contrasenia.trim() === "") {
            alert("Por favor, ingrese su contrasenia");
            formularioValido = false;
        }
    
        if(!formularioValido){
            event.preventDefault();
        } else{
            const usuario = {
                nombre: nombreUsuario,
                contrasenia: contrasenia
            };
    
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
            usuarios.push(usuario);
    
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
            alert("Usuario almacenado correctamente");
        }
    
    });
}

function validarDatosContrasenia(){
    document.getElementById("boton-enviar").addEventListener("click", function(event) {
        const email = document.getElementById("email").value;
        const nombreUsuario1 = document.getElementById("nombreusuario").value;
    
        let formularioValido1 = true;
    
        if(nombreUsuario1.trim() === ""){
            alert("Por favor, ingrese su nombre de usuario");
            formularioValido1 = false;
        }
    
        if(email.trim() === "") {
            alert("Por favor, ingrese su email");
            formularioValido1 = false;
        }
    
        if(!formularioValido1){
            event.preventDefault();
        }
    
    });
}

function validarCampos() {
    const email = document.getElementById("email");
    const nombreUsuario = document.getElementById("nombreusuario");
    const botonEnviar = document.getElementById("boton-enviar");

    function verificarCampos(){
        if(email.value.trim() === "" || nombreUsuario.value.trim() === "") {
            botonEnviar.disabled = true;
        } else{
            botonEnviar.disabled = false;
        }
    }

    email.addEventListener("input", verificarCampos);
    nombreUsuario.addEventListener("input", verificarCampos);

    verificarCampos();
}

document.addEventListener("DOMContentLoaded", validarCampos);

validarCampos();






