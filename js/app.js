
const input = document.querySelector('input');
var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var domicilio = document.querySelector("#domicilio");
var localidad = document.querySelector("#localidad");
var dni = document.querySelector("#dni");
var nacim = document.querySelector("#nacim");
var telef = document.querySelector("#telef");
var mail = document.querySelector("#mail");

var cName = document.querySelector("#cName");
var cApell = document.querySelector("#cApell");
var cMail = document.querySelector("#cMail");
var cTexto = document.querySelector("#cTexto");


var limpiaValue = (v) => {
    document.querySelector(v).value = "";
}

function validacionReg() {
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

function validacionContact() {
    if (!isNaN(cName.value)) {
        alert(`Ingrese un nombre válido`);
        limpiaValue("#cName");
        return false;
    } else {
        if (!isNaN(cApell.value)) {
            alert(`Ingrese un apellido válido`);
            limpiaValue("#cApell");
            return false;
    }
    
    return true;
}
}
