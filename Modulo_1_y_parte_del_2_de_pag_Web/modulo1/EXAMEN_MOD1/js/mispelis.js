$(document).ready(function () {

    function buscaDatos(numeroPagina) {
        var urlAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=e8c6d35a6bd555573d4b93aff5b6743b';
        urlAPI += '&page=' + numeroPagina;

        $.get(urlAPI, function (respuesta, estado) {
            $('#resultados').html('');
            if (estado === 'success') {
                $('#pagina-actual').html(respuesta.page);
                $('#total-paginas').html(respuesta.total_pages);

                var peliculas = '';

                $.each(respuesta.results, function (indice, elemento) {

                    var rutaPoster = 'https://image.tmdb.org/t/p/w500' + elemento.poster_path;

                    peliculas = '<div class="item-pelicula">';
                    peliculas += '    <div class="contenido-pelicula">';
                    peliculas += '        <img class="imagen-pelicula" src="' + rutaPoster + '" alt="" />';
                    peliculas += '    </div>';
                    peliculas += '    <div class="datos-pelicula">';
                    peliculas += '        <div class="cabecera">';
                    peliculas += '            <span>' + elemento.title + '</span>';
                    peliculas += '        </div>';
                    peliculas += '        <div class="votos">' + elemento.vote_average + ' <i class="fa fa-star" aria-hidden="true"></i></div>';
                    peliculas += '        <div class="clear">' + elemento.overview.substring(0, 400) + '</div>';
                    peliculas += '        <div class="contenido">';
                    peliculas += '        </div>';
                    peliculas += '    </div>';
                    peliculas += '</div>';

                    $('#resultados').append(peliculas);
                });

            }
        });
    }
    buscaDatos(1);
});
