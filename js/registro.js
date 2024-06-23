document.addEventListener('DOMContentLoaded', (event) => {
    // Validar solo letras en el input de nombre
    const inputNombre = document.getElementById('nombre');
    inputNombre.addEventListener('input', (event) => {
        const input = event.target;
        const valor = input.value;
        const valorLimpio = valor.replace(/[^a-zA-Z\s]/g, ''); // Permitir solo letras y espacios
        if (valor !== valorLimpio) {
            input.value = valorLimpio;
        }
    });

    // Validar que el email sea válido
    const inputEmail = document.getElementById('email');
    inputEmail.addEventListener('input', (event) => {
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