
limpiaValue = (v) => {
    document.querySelector(v).value = "";
}



const input = document.querySelector('input');
var nombre = document.querySelector("#nombre").value;
var apellido = document.querySelector("#apellido").value;
var domicilio = document.querySelector("#domicilio").value;
var localidad = document.querySelector("#localidad").value;
var dni = document.querySelector("#dni").value;
if (dni.length < 7 || dni.length > 8) {
    alert("Ingrese un valor de DNI válido");
    document.addEventListener("input", limpiaValue("#dni"));
}
var nacim = document.querySelector("#nacim").value;
var telef = document.querySelector("#telef").value;
if ((!Number.isInteger(parseInt(telef)))) {
    alert("Ingrese un teléfono válido");
    document.addEventListener("input", limpiaValue("#telef"));
}
var mail = document.querySelector("#mail").value;

document.write(`${nombre} ${apellido} ${domicilio} ${localidad} ${dni} ${nacim} ${telef} ${mail}`)


/*
const input = document.querySelector('input');
const log = document.getElementById('valores');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}*/