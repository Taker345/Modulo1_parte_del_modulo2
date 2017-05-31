
function Saluda() {
    alert('Hola Mundo');
    alert("Okay");
}

function saludoPersonalizado(nombre){
    alert('Hola ' + nombre);
}

function saludoNombre(parametroId){
   var caja = document.getElementById(parametroId);
   alert('Saludos compañero ' + caja.value);
}

function tuEmailEstaCorrecto(parametroId){
   var caja = document.getElementById(parametroId);
   alert('Tu email esta correcto ' + caja.value + '?');
}