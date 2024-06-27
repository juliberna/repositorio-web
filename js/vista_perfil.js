window.onload = function(){

    let boton = document.querySelector("#guardar-cambios");
    let contrasenia = document.querySelector("#contraseña");
    let repetirContrasenia = document.querySelector("#repetir-contrasenia");
    let inputTarjeta = document.querySelector("#tarjeta-credito")
    let inputCupon = document.querySelector("#cupon-pago");
    let inputTransferencia = document.querySelector("#transferencia");
    let inputPago = document.querySelector("#pago-facil");
    let inputRapi = document.querySelector("#rapipago");
    let claveTarjeta = document.querySelector("#clave-tarjeta");
    let numeroTarjeta = document.querySelector("#numeros-tarjeta");
    
    contrasenia.addEventListener("keyup", habilitarBotonDeGuardar);
    repetirContrasenia.addEventListener("keyup", habilitarBotonDeGuardar);
    inputTarjeta.addEventListener("click", function(){
        habilitarBotonDeGuardar();
        destildar();
    });
    inputCupon.addEventListener("click", function(){
        habilitarBotonDeGuardar();
        destildar();
        cuponDePago();
    });
    inputTransferencia.addEventListener("click", function(){
        habilitarBotonDeGuardar();
        destildar();
    });
    inputPago.addEventListener("click",destildar);
    inputRapi.addEventListener("click",destildar);
    claveTarjeta.addEventListener("keyup", habilitarBotonDeGuardar);
    numeroTarjeta.addEventListener("blur",habilitarBotonDeGuardar);

    function esCaracterEspecial(caracter){
        let cadenaDeCaracteres  = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
        return cadenaDeCaracteres.test(caracter);
    }
    function esUnNumero(caracter) {
        let cadenaDeNumeros = /[0-9]/;
        return cadenaDeNumeros.test(caracter);
    }
    function esUnaLetra(caracter) {
        let cadenaDeLetras = /[a-zA-Z]/;
        return cadenaDeLetras.test(caracter);
    }

    function contraseniaValida(contrasenia){
        let contadorDeCaracteres = 0;
        let contadorDeLetras = 0;
        let contadorDeNumeros = 0;
        for (let index = 0; index < contrasenia.length; index++) {

            if(esCaracterEspecial(contrasenia[index])){
                contadorDeCaracteres++;
            }else if(esUnNumero(contrasenia[index])){
                contadorDeNumeros++;
            }else if(esUnaLetra(contrasenia[index])){
                contadorDeLetras++;
            }
        }
        return contrasenia.length >= 8 && contadorDeCaracteres >= 2 && contadorDeLetras >= 2 && contadorDeNumeros >= 2;
    }

    
    function habilitarBotonDeGuardar(){
        let contrasenia1 = contrasenia.value;
        let contrasenia2 = repetirContrasenia.value;
        if((contrasenia1 != "" && contrasenia2 != "" && contrasenia1 === contrasenia2 && contraseniaValida(contrasenia1)) || (inputTarjeta.checked && validarClaveDeTarjeta(claveTarjeta.value) && validarNumeroTarjeta(numeroTarjeta.value)) || inputCupon.checked || inputTransferencia.checked){
            boton.classList.remove("desactivada");
        }else{
            boton.classList.add("desactivada");
        }
    }

    function destildar(){
        if(inputTarjeta.checked || inputTransferencia.checked) {
            inputPago.checked = false;
            inputRapi.checked = false;
        }
    } 
    
    function cuponDePago(){
        if(inputCupon.checked){
            inputPago.checked = true;
        }
    }

    function validarClaveDeTarjeta(clave){
        let expRegular = /^[1-9]{3}$/;
        return expRegular.test(clave);
    }

    function validarNumeroTarjeta(numero){
        let expRegular = /^\d{16,19}$/
        let stringCadena = numero.toString();
        let cadena = 0;
        for (let index = 0; index < stringCadena.length - 1; index++) {
            cadena+= parseInt(stringCadena[index]);
        }
        let ultimoDigito = parseInt(stringCadena[stringCadena.length-1]);
        let esValida = expRegular.test(numero) && (cadena%2 !== 0 && ultimoDigito % 2 === 0 || cadena%2 === 0 && ultimoDigito % 2 !== 0);
        if(!esValida){
            alert("ERROR: El numero de la tarjeta es inválido.")
        }else{
            return esValida;
        }
    }



}


