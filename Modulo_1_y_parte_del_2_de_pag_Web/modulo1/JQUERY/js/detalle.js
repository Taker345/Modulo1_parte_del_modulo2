
$(document).ready(function () {

    // PREPARAMOS LA LLAMADA AL API PARA TRAER
    // UN SOLO ELEMENTO
    var id = window.location.search.substring(1).split('=')[1];

    var urlAPI = 'https://icangopmg-develop.azurewebsites.net/api/v1/services';
    urlAPI += '/' + id;

    $.get(urlAPI, function (respuesta, estado) {
        if (estado === 'success') {
            if (respuesta.error === '') {
                // cargo los datos en el formulario
                $('#txtId').val(respuesta.data[0].id);
                $('#txtNombre').val(respuesta.data[0].name);
                $('#txtFecha').val(respuesta.data[0].dateCreated);
                $('#imMainImage').attr("src", respuesta.data[0].mainImage);
            }
        }
    });

});