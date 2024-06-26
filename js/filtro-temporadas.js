document.addEventListener("DOMContentLoaded", function() {
    const temporadasSelect = document.getElementById("temporadas");
    const capitulosSelect = document.getElementById("capitulos");

    const episodiosPorTemporada = {
        temporada1: 7,
        temporada2: 13,
        temporada3: 13,
        temporada4: 13,
        temporada5: 16
    };

    temporadasSelect.addEventListener("change", function() {
        const selectedTemporada = temporadasSelect.value;

        // Limpia los capítulos existentes
        while (capitulosSelect.firstChild) {
            capitulosSelect.removeChild(capitulosSelect.firstChild);
        }

        // Agrega la opción predeterminada
        const opcionDefault = document.createElement("option");
        opcionDefault.value = "";
        opcionDefault.textContent = "Capítulos";
        capitulosSelect.appendChild(opcionDefault);

        if (selectedTemporada && episodiosPorTemporada[selectedTemporada]) {
            const numEpisodios = episodiosPorTemporada[selectedTemporada];
            for (let i = 1; i <= numEpisodios; i++) {
                const option = document.createElement("option");
                option.value = `capitulo${i}`;
                option.textContent = `Capítulo ${i}`;
                capitulosSelect.appendChild(option);
            }
        }
    });
});
