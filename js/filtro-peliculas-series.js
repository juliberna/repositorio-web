window.onload = function() {
    const peliculas = [
        { title: 'Interstellar', img: '../assets/images/interstellar.jpg', link: 'detalles-peliculas.html' },
        { title: 'Prestige', img: '../assets/images/prestige.jpg' },
        { title: 'Tenet', img: '../assets/images/tenet.jpg' },
        { title: 'Memento', img: '../assets/images/memento.jpg' },
        { title: 'Inception', img: '../assets/images/inception.jpg' },
        { title: 'Dunkirk', img: '../assets/images/dunkirk.jpg' },
        { title: 'Dark', img: '../assets/images/b-dark.jpg' }
    ];

    const series = [
        { title: 'Breaking Bad', img: '../assets/images/breakingbad.jpg', link: 'detalles-series.html' },
        { title: 'Supernatural', img: '../assets/images/supernatural.jpg' },
        { title: 'Game of Thrones', img: '../assets/images/gameofthrones.jpg' },
        { title: 'Euphoria', img: '../assets/images/euphoria.jpg' },
        { title: 'Arrow', img: '../assets/images/arrow.jpg' },
        { title: 'Big Bang Theory', img: '../assets/images/bigbang.jpg' },
        { title: 'Friends', img: '../assets/images/friends.jpg' }
    ];

    const contenidoInicio = document.getElementById('contenido-inicio');

    function crearElementoMultimedia(item) {
        const container = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = item.img;
        imgElement.alt = item.title;

        if (item.link) {
            const linkElement = document.createElement('a');
            linkElement.href = item.link;
            linkElement.target = '_blank';
            linkElement.appendChild(imgElement);
            container.appendChild(linkElement);
        } else {
            container.appendChild(imgElement);
        }

        return container;
    }

    function mostrarPeliculasYSeries() {
        contenidoInicio.innerHTML = '';

        peliculas.forEach(pelicula => {
            contenidoInicio.appendChild(crearElementoMultimedia(pelicula));
        });

        series.forEach(serie => {
            contenidoInicio.appendChild(crearElementoMultimedia(serie));
        });
    }

    function mostrarSoloPeliculas() {
        contenidoInicio.innerHTML = '';

        peliculas.forEach(pelicula => {
            contenidoInicio.appendChild(crearElementoMultimedia(pelicula));
        });
    }

    function mostrarSoloSeries() {
        contenidoInicio.innerHTML = '';

        series.forEach(serie => {
            contenidoInicio.appendChild(crearElementoMultimedia(serie));
        });
    }

    mostrarPeliculasYSeries();

    document.querySelector('.home a').addEventListener('click', function(e) {
        e.preventDefault();
        mostrarPeliculasYSeries();
    });

    document.querySelector('.peliculas a').addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSoloPeliculas();
    });

    document.querySelector('.series a').addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSoloSeries();
    });
};

