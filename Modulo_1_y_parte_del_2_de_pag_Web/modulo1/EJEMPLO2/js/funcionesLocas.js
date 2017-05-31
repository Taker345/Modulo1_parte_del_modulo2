var coches = [];

/*Esta funcion es para explicar el uso del for!*/

function ejemploFor() {
    var impares = null;
    console.log('impares ->', impares);
    impares = []
    console.log('impares ->', impares);
    impares.push(1);
    console.log('impares ->', impares);

    for (var i = 0; i < 9; i++) {
        //console.log(i);
        impares.push(i);
    }
    console.log('impares ->', impares);

    //impares = [];

    if (impares !== null) {



        for (var i = 0; i < impares.length; i++) {
            console.log(impares[i]);
        }
    } else {
        console.log('el valor para impares es nulo');
    }

    console.log('impares ->', impares);
    // elimino uno a uno los elementos

    for (var i = impares.length -1; i >= 0; i--) {
        impares.pop();
        console.log(impares[i]);
        console.log('impares ->', impares);

    }






}




/*Esta funcion es para explicar el uso del JSON*/
function ejemploJSON() {

    console.log('JSON forever!!');
    
    var usuario = {
        nombre: 'Manolo el del bombo',
        apellidos: 'De todos los antos',
        nif: '11111A'
    }
    var usuarios = [];
    usuarios.push(usuario);
    console.log('Usuarios -> ', usuarios)
}




function ejemploArrayJSON() {
    var impares = [];
    //veamos como se usa el while para hacer bulces
    var i = 0;
    while (i < 10) {
        impares.push(i);
        i++; // i= i+1; i += 1;
    }
}

//funcion para buscar un numero en un array
var numeros = [0, 100, -5, 25, 78, 6];
function buscaNumero(numeroABuscar) {
    if (!esUnNumero(numeroABuscar)) {
        //mostramos la validacion
        console.log('CHACHO COMPA VLAIDA ESO')
        var mensajeError = document.getElementById('mensaje-error');

        mensajeError.className = '';
        var caja = document.getElementById('txtNumero');
        caja.className = 'error';
    }
    else {
        console.log('buscando numero '+ numeroABuscar)
        console.log(numeros);
        var i = 0;
        while (i < numeros.length) {
            if (parseInt(numeroABuscar) === numeros[i]) {
                console.log('numero encontrado');
                break;
            }
            console.log('El numero no esta en la posicion ' + i);
            i++;

    }
   
    }
}

function esUnNumero(numeroAValidar) {
    //compruevo si la validacion es correcta
    return !isNaN(parseInt(numeroAValidar));
    //if (isNaN(parseInt(numeroAValidar))) {
    //    return true;
    //}
    //    return true;
}







//funcion que me da el array para mostrarlo en html

function muestraArray() {

    var ZonaArray = document.getElementById('zonaARRAY');

    ZonaArray.innerHTML = numeros;
}