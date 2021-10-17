

var nombre = document.querySelector("#nombre").value;
var apellido = document.querySelector("#apellido").value;
var domicilio = document.querySelector("#domicilio").value;
var localidad = document.querySelector("#localidad").value;
var dni = document.querySelector("#dni").value;
if (dni.length < 7 || dni.length > 8) {
    alert("Ingrese un valor de DNI válido");
    document.querySelector("#dni").value = "";
}
var nacim = document.querySelector("#nacim").value;
var telef = document.querySelector("#telef").value;
if ((!Number.isInteger(parseInt(telef)))) {
    alert("Ingrese un teléfono válido");
    document.querySelector("#telef").value = "";
}
var mail = document.querySelector("#mail").value;

document.write(`${nombre} ${apellido} ${domicilio} ${localidad} ${dni} ${nacim} ${telef} ${mail}`)