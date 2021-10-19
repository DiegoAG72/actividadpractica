
var limpiaValue = (v) => {
    document.querySelector(v).value = "";
}

const input = document.querySelector('input');
var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var domicilio = document.querySelector("#domicilio");
var localidad = document.querySelector("#localidad");
var dni = document.querySelector("#dni");
var nacim = document.querySelector("#nacim");
var telef = document.querySelector("#telef");
var mail = document.querySelector("#mail");


 function validacion() {
    if (dni.value.length < 7 || dni.value.length > 8) {
        // Si no se cumple la condicion...
        alert('Ingrese un DNI válido');
        return false;
    }/*
    else if (condicion que debe cumplir el segundo campo del formulario) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe tener un valor de...');
        return false;
    }
    ...
    else if (condicion que debe cumplir el último campo del formulario) {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo debe tener un valor de...');
        return false;
    }*/

    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}
