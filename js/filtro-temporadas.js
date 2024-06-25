document.addEventListener("DOMContentLoaded", function(){
    const temporadaSelect = document.getElementById("temporadas");
    const capitulosSelect = document.getElementById("capitulos");

    const dataSeries = {
        1:8,
        2:10,
        3:13,
        4:15,
        5:8
    };

    temporadaSelect.addEventListener("change", function(){
        const temporadaSeleccionada = temporadaSelect.value;
        capitulosSelect.innerHTML = "<option value=''>Capitulos</option>";

        if(temporadaSeleccionada){
            const numeroCapitulos = dataSeries[temporadaSeleccionada];

            for(let i = 1; i <= numeroCapitulos; i++){
                const opcion = document.createElement("option");
                opcion.value = `capitulo${i}`;
                opcion.textContent = `Capitulo ${i}`;
                capitulosSelect.appendChild(opcion);
            }
        }
    })
})