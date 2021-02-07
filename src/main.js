/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

var nombre = " Ismael Artavia";
var altura = 175;
var concatenacion = nombre + " " + altura;

//document.write("mi nombre es: " + nombre + " y mi altura es: " + altura);
/*var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;
datos.innerHTML = `<h1>Soy la caja de datos </h1>
<h2> Mi nombres es: ${nombre}</h2>
<h3> Mido: ${altura}</h3>

`;

if (altura >= 190) {
  datos.innerHTML += ` <h1> Eres alto </h1>`;
}
if (altura >= 170 || altura < 190) {
  datos.innerHTML += `<h1>tienes altura promedio</h1>`;
} else {
  datos.innerHTML += `<h1>eres bajo</h1>`;
}

for (var i = 2000; i <= 2020; i++) {
  datos.innerHTML += "<h2>estamos en el año: " + i;
}*/

function MuestraMinombre(nombre, altura) {
  var datos = `<h1>Soy la caja de datos </h1>
<h2> Mi nombres es: ${nombre}</h2>
<h3> Mido: ${altura}</h3>`;
  return datos;
}

function imprimir() {
  var datos = document.getElementById("datos");
  datos.innerHTML = MuestraMinombre("Ismael", 175);
}

imprimir();

var nombres = ["Victor", "Antonio", "Joaquin"];

for (var i = 0; i < nombres.length; i++) {
  document.write(nombres[i] + "</br>");
}
