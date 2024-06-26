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

validarInicio();






