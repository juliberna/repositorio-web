document.addEventListener("DOMContentLoaded", (event) => {
  // Validar solo letras en el input de nombre
  const inputNombre = document.getElementById("nombre");
  inputNombre.addEventListener("input", (event) => {
    const input = event.target;
    const valor = input.value;
    const valorLimpio = valor.replace(/[^a-zA-Z\s]/g, ""); // Permitir solo letras y espacios
    if (valor !== valorLimpio) {
      input.value = valorLimpio;
    }
  });

  // Validar que el email sea válido
  const inputEmail = document.getElementById("email");
  inputEmail.addEventListener("input", (event) => {
    const input = event.target;
    const valor = input.value;
    if (!esEmailValido(valor)) {
      alert("Por favor, introduce un correo electrónico válido.");
    } else {
      input.setCustomValidity("");
    }
  });
});

function esEmailValido(email) {
  // Expresión regular para validar el email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputCvv = document.getElementById("tarjeta-credito-cvv");

  inputCvv.addEventListener("input", function () {
    let cvvValue = inputCvv.value.trim();

    if (
      cvvValue.length === 3 &&
      /^\d{3}$||/.test(cvvValue) &&
      !/[0]/.test(cvvValue)
    ) {
      console.log("CVV valido");
    } else {
      console.log("CVV invalido");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputContraseña = document.getElementById("contraseña");
  const inputRepetirContraseña = document.getElementById("repetircontraseña");

  inputContraseña.addEventListener("input", function () {
    let contraseñaValue = inputContraseña.value.trim();
    let repetirContraseñaValue = inputContraseña.value.trim();

    if (contraseñaValue.length >= 8 && repetirContraseñaValue >= 8) {
      let letras = contraseñaValue.match(/[a-zA-Z]/g);
      let numeros = contraseñaValue.match(/[0-9]/g);
      let especiales = contraseñaValue.match(/[^a-zA-Z0-9]/g);

      let repetirLetras = contraseñaValue.match(/[a-zA-Z]/g);
      let repetirNumeros = contraseñaValue.match(/[0-9]/g);
      let repetirEspeciales = contraseñaValue.match(/[^a-zA-Z0-9]/g);

      if (
        letras &&
        letras.length >= 2 &&
        repetirLetras &&
        repetirLetras >= 2 &&
        repetirNumeros &&
        repetirNumeros >= 2 &&
        repetirEspeciales &&
        repetirEspeciales >= 2 &&
        numeros &&
        numeros.length >= 2 &&
        especiales &&
        especiales.length >= 2
      ) {
        console.log("contraseña valida");
      } else {
        console.log(
          "la contraseña debe contener al menos 2 letras, 2 numeros y 2 caracteres especiales"
        );
      }
    } else {
      console.log("la contraseña debe tener al menos 8 caracteres");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputTarjetaNumero = document.getElementById("tarjeta-credito");
    const errorMessageTarjeta = document.getElementById("error-message-tarjeta");
    const confirmarBtn = document.getElementById("confirmar");
  
    function validarNumeroTarjeta() {
      let tarjetaValue = inputTarjetaNumero.value.trim();
  
      if (/^\d{16,19}$/.test(tarjetaValue)) {
        let numerosAnteriores = tarjetaValue.slice(0, -1);
        let ultimoNumero = parseInt(tarjetaValue.slice(-1));
        let sumaNumerosAnteriores = numerosAnteriores.split('').reduce((acc, num) => acc + parseInt(num), 0);

        if ((sumaNumerosAnteriores % 2 === 1 && ultimoNumero % 2 === 0) || 
            (sumaNumerosAnteriores % 2 === 0 && ultimoNumero % 2 === 1)) {
          errorMessageTarjeta.textContent = "";
          confirmarBtn.disabled = false;
        } else {
          errorMessageTarjeta.textContent = "El último número debe ser par si la suma de los números anteriores es impar, y viceversa.";
          confirmarBtn.disabled = true;
        }
      } else {
        errorMessageTarjeta.textContent = "El número de tarjeta debe contener entre 16 y 19 dígitos numéricos.";
        confirmarBtn.disabled = true;
      }
    }
  
    inputTarjetaNumero.addEventListener("input", validarNumeroTarjeta);
  
    confirmarBtn.addEventListener("click", function(event) {
      let tarjetaValue = inputTarjetaNumero.value.trim();
  
      if (/^\d{16,19}$/.test(tarjetaValue)) {
        let numerosAnteriores = tarjetaValue.slice(0, -1);
        let ultimoNumero = parseInt(tarjetaValue.slice(-1));
        let sumaNumerosAnteriores = numerosAnteriores.split('').reduce((acc, num) => acc + parseInt(num), 0);
  
        if (!((sumaNumerosAnteriores % 2 === 1 && ultimoNumero % 2 === 0) || 
              (sumaNumerosAnteriores % 2 === 0 && ultimoNumero % 2 === 1))) {
          event.preventDefault();
          errorMessageTarjeta.textContent = "El último número debe ser par si la suma de los números anteriores es impar, y viceversa.";
        } else {
          errorMessageTarjeta.textContent = "";
        }
      } else {
        event.preventDefault();
        errorMessageTarjeta.textContent = "El número de tarjeta debe contener entre 16 y 19 dígitos numéricos.";
      }
    });
  });
  


