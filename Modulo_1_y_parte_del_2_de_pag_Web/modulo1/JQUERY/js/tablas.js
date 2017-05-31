    
$(document).ready(function () {
    // PREPARO LA DEFINICIÓN DEL EVENTO CLICK
    // PARA ELIMINAR UNA FILA DE LA TABLA
    $('input[tipo=eliminar]').click(function () {
        console.log('eliminando');
        var celda = $(this).parent();
        var fila = celda.parent();
        //fila.addClass('oculto');
        //fila.fadeOut('slow');
        fila.fadeOut('slow', function () {
            console.log('fade out y algo más');
        });
    });
    // PARA ACTUALIZAR UNA FILA DE LA TABLA
    $('input[tipo=editar]').click(function () {
        var celda = $(this).parent();
        var fila = celda.parent();
        var textoAnterior = celda.siblings(":first").text();
        celda
            .siblings(":first")
            .html('<input type="text" value="' + textoAnterior + '" />');
        //console.log(celda.siblings(":first").next().html());
        //console.log(celda.siblings(":first").next().next().html());
        textoAnterior = celda
                            .siblings(":first") // pillo el primer hermano
                            .next()             // salto al siguiente hermano
                            .text();            // accedo al texto de la celda
        celda
            .siblings(":first")
            .next()
            .html('<input type="text" value="' + textoAnterior + '" />');
    });

    // PREPARAMOS LA LLAMADA AL API PARA OBTENER LOS DATOS
    // QUE SE MOSTRARÁN EN LA TABLA
    var urlAPI = 'https://icangopmg-develop.azurewebsites.net/api/v1/services';

    $.get(urlAPI, function (respuesta, estado) {
        //console.log('Respuesta -> ', respuesta);
        //console.log('Estado -> ', estado);
        if (estado === 'success') {
            // todo ha ido bien, pinto los datos en la tabla
            if (respuesta.error === '') {
                //debugger;
                var fila = '';
                $.each(respuesta.data, function (indice, elemento) {
                    fila = '<tr>';
                    // primera celda
                    fila += '<td>';
                    if (elemento.mainImage !== null) {
                        fila += '<img src="' + elemento.mainImage + '" />';
                    }
                    else {
                        fila += '<img src="./images/no-image.png" />';
                    }
                    fila += '</td>';
                    // segunda celda
                    fila += '<td>';
                    fila += elemento.dateCreated;
                    fila += '</td>';
                    // tercera celda
                    fila += '<td>';
                    fila += elemento.name;
                    fila += '</td>';
                    // cuarta celda
                    fila += '<td>';
                    fila += '<a href="detalle.html?id=' + elemento.id + '"> > </a>';
                    fila += '</td>';

                    fila += '</tr>';
                    // añado la fila a la tabla
                    var htmlAnterior = $('#destinoDeLosDatos').html();
                    $('#destinoDeLosDatos').html(htmlAnterior + fila);
                });
            }
        } else {
            // hubo algún problema
        }
    });
});