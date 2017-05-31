//Esta funcion valida el formulario

function validar(){
    // comprovar valor de campo nombre
    var cajaNombre = document.getElementById('txtNombre');
    var errorNombre = document.getElementById('errorNombre')
    if (cajaNombre.value === ""){ //el tiple igual se usa por que perdo lo dice (esperando exlicacion posterior)
        cajaNombre.className='error';
        errorNombre.className = 'error-text-oculto'
        //alert('Rellena tu nombre');  se le puede añadir la alarta tambien
        return;
    }
    // comprovar valor de campo apellido
    var cajaApellido = document.getElementById('txtApellido');
    if (cajaApellido.value === ""){ //el tiple igual se usa por que perdo lo dice (esperando exlicacion posterior)
        cajaApellido.className='error';
        //alert('Rellena tu apellido');  se le puede añadir la alarta tambien
        errorApellido.className = 'error-text-oculto';   
        return;
    }
    // comprovar valor de campo email
    var cajaEmail = document.getElementById('txtEmail');
    if (cajaEmail.value === ""){ //el tiple igual se usa por que perdo lo dice (esperando exlicacion posterior)
        cajaEmail.className='error';
        //alert('Rellena tu email'); se le puede añadir la alarta tambien 
        errorEmail.className='error-text-oculto';    
        return;
    }
    // si todo es correcto envio formulario

    //alert('TODO ESTA CORRECTO COMPANIERO');
    //alert(document.forms[0])
    //Form.submit();

    var formularoInscripcion = document.forms[0];
    formularoInscripcion.submit();

}
 /*pruevas fallidas de duplicado hay que crear para cada caja una funcion o cojer y hacer 
 lo siguiente despues de acabar las otras funciones que estan aqui debajo*/
/*function quitaErrorNombre(){

    var cajaNombre = document.getElementById('txtNombre');
    if (cajaNombre.value !== "") {
        cajaNombre.className = '';
        var errorNombre = document.getElementById('errorNombre');
        errorNombre.className = 'no-error';
        return;
    }*/
    /*var cajaApellido = document.getElementById('txtApellido');
        if (cajaApellido.value !== "") {
        cajaApellido.className = '';
        var errorApellido = document.getElementById('errorApellido');
        errorApellido.className = 'no-error';
        return;
    }*/
    

    /*var cajaApellido = document.getElementById('txtApellido');
    if (cajaApellido.value !== "") {
        cajaApellido.className = '';
        var errorApellido = document.getElementById('errorApellido');
        errorApellido.className = 'no-error';
        return;
    }
}*/
//funciones quitar el errro no reutilizablre
/*function quitaErrorApellido(){
    var cajaApellido = document.getElementById('txtApellido');
    if (cajaApellido.value !== "") {
        cajaApellido.className = '';
        var errorApellido = document.getElementById('errorApellido');
        errorApellido.className = 'no-error';
        return;
    }
}*/
//funciones quitar el errro no reutilizablre
/*function quitaErrorEmail(){
    var cajaEmail = document.getElementById('txtEmail');
    if (cajaEmail.value !== "") {
        cajaEmail.className = '';
        var errorEmail = document.getElementById('errorEmail');
        errorEmail.className = 'no-error';
        return;
    }
}*/

//Funcion quitar nombre SI reutilizable 

function quitarErrorReutilizable(cajaId, errorId) {
    var caja = document.getElementById(cajaId);
    if (caja.value !== "") {
        caja.className = '';
        var error = document.getElementById(errorId);
        error.className = 'no-error';
            return;

    }


}