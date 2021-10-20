


const input = document.querySelector('input');
var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var domicilio = document.querySelector("#domicilio");
var localidad = document.querySelector("#localidad");
var dni = document.querySelector("#dni");
var nacim = document.querySelector("#nacim");
var telef = document.querySelector("#telef");
var mail = document.querySelector("#mail");

var limpiaValue = (v) => {
    document.querySelector(v).value = "";
}

function validacion() {
    if (dni.value.length < 7 || dni.value.length > 8) {
        alert('Ingrese un DNI válido');
        limpiaValue("#dni");
        return false;
    } else {
        if (isNaN(telef.value) || telef.value.length < 6) {
            alert("Ingrese un número de teléfono válido");
            limpiaValue("#telef");
        }


        return true;
    }
}
