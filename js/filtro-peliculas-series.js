window.onload = function() {
    const peliculas = [
        { titulo: 'Interstellar', img: '../assets/images/interstellar.jpg', categoria: 'ciencia-ficcion', link: 'detalles-peliculas.html' },
        { titulo: 'Prestige', img: '../assets/images/prestige.jpg', categoria: 'suspenso' },
        { titulo: 'Tenet', img: '../assets/images/tenet.jpg', categoria: 'ciencia-ficcion' },
        { titulo: 'Memento', img: '../assets/images/memento.jpg', categoria: 'suspenso' },
        { titulo: 'Inception', img: '../assets/images/inception.jpg', categoria: 'ciencia-ficcion' },
        { titulo: 'Dunkirk', img: '../assets/images/dunkirk.jpg', categoria: 'misterio' },
        { titulo: 'Dark', img: '../assets/images/b-dark.jpg', categoria: 'ciencia-ficcion' }
    ];

    const series = [
        { titulo: 'Breaking Bad', img: '../assets/images/breakingbad.jpg', categoria: 'misterio', link: 'detalles-series.html' },
        { titulo: 'Supernatural', img: '../assets/images/supernatural.jpg', categoria: 'suspenso' },
        { titulo: 'Game of Thrones', img: '../assets/images/gameofthrones.jpg', categoria: 'suspenso' },
        { titulo: 'Euphoria', img: '../assets/images/euphoria.jpg', categoria: 'ciencia-ficcion' },
        { titulo: 'Arrow', img: '../assets/images/arrow.jpg', categoria: 'ciencia-ficcion' },
        { titulo: 'Big Bang Theory', img: '../assets/images/bigbang.jpg', categoria: 'misterio' },
        { titulo: 'Friends', img: '../assets/images/friends.jpg', categoria: 'misterio' }
    ];

    const contenidoInicio = document.getElementById('contenido-inicio');
    const categoriasSelect = document.getElementById('categorias');
    const busquedaInput = document.querySelector('.busqueda-nombre input');

    function crearElementoMultimedia(item) {
        const contenedor = document.createElement('div');
        const imgElemento = document.createElement('img');
        imgElemento.src = item.img;
        imgElemento.alt = item.titulo;

        if (item.link) {
            const linkElement = document.createElement('a');
            linkElement.href = item.link;
            linkElement.target = '_blank';
            linkElement.appendChild(imgElemento);
            contenedor.appendChild(linkElement);
        } else {
            contenedor.appendChild(imgElemento);
        }

        return contenedor;
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

    function filtrarPorCategoria(categoria) {
        contenidoInicio.innerHTML = '';

        peliculas.forEach(pelicula => {
            if (pelicula.categoria === categoria) {
                contenidoInicio.appendChild(crearElementoMultimedia(pelicula));
            }
        });

        series.forEach(serie => {
            if (serie.categoria === categoria) {
                contenidoInicio.appendChild(crearElementoMultimedia(serie));
            }
        });
    }

    function filtrarPorNombre() {
        const textoBusqueda = busquedaInput.value.trim().toLowerCase();
    
        const peliculasFiltradas = peliculas.filter(pelicula =>
            pelicula.titulo.toLowerCase().includes(textoBusqueda)
        );
    
        const seriesFiltradas = series.filter(serie =>
            serie.titulo.toLowerCase().includes(textoBusqueda)
        );
    
        contenidoInicio.innerHTML = '';
    
        peliculasFiltradas.forEach(pelicula => {
            contenidoInicio.appendChild(crearElementoMultimedia(pelicula));
        });
    
        seriesFiltradas.forEach(serie => {
            contenidoInicio.appendChild(crearElementoMultimedia(serie));
        });
    }

    function filtrarContenido() {
        const categoriaSeleccionada = categoriasSelect.value;

        if (busquedaInput.value.trim() !== '') {
            filtrarPorNombre();
        } else if (categoriaSeleccionada === 'peliculas') {
            mostrarSoloPeliculas();
        } else if (categoriaSeleccionada === 'series') {
            mostrarSoloSeries();
        } else if (categoriaSeleccionada !== 'todas') {
            filtrarPorCategoria(categoriaSeleccionada);
        } else {
            mostrarPeliculasYSeries();
        }
    }

    categoriasSelect.addEventListener('change', filtrarContenido);
    busquedaInput.addEventListener('input', filtrarContenido);

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

    document.getElementById('cerrar-sesion').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "../index.html"; 
    });
};


