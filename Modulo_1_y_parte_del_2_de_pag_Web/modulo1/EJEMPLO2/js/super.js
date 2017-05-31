
var contenidoGlobal = {
    'lacteos': 'Esta es la seccion de los lacteos',
    'pescaderia': 'Esta sera la seccion de pescaderia',
    'panaderia': 'Esta es la seccion de panaderia',
    'carniceria': 'Esta es la seccion de carniceria',
    'otros': 'En esta seccion encontraras todo lo restante'
}

function muestraMenu(objId, categoria) {
    switch (objId) {
        case 'idLácteos':
            console.log('Lácteos');
            cargaContenido(contenidoGlobal.lacteos);
            break;
        case 'idCarnicería':
            console.log('Carnicería');
            cargaContenido(contenidoGlobal.carniceria);
            break;
        case 'idPescadería':
            console.log('Pescadería');
            cargaContenido(contenidoGlobal.pescaderia);
            break;
        case 'idPanadería':
            console.log('Panadería');
            cargaContenido(contenidoGlobal.panaderia);
            break;
        case 'idOtros':
            console.log('Otros');
            cargaContenido(contenidoGlobal.otros);
            break;
            default:

    }
}

function cargaContenido(contenido) {
    
    var cajaContenido = document.getElementById('sub-contenido');
    cajaContenido.className = 'no-oculto';
    cajaContenido.innerHTML = contenido;
}

function muestraMenuCombo() {
    var combo = document.getElementById('elCombo');
    console.log('combo ->', combo.value);
    console,log('')
}