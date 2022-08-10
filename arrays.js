var frutas = ["manzana", "pera", "banano"];

console.log(frutas);
console.log(frutas[2]);
console.log(frutas.length);

// agregar al final del arreglo
var masFrutas = frutas.push("ubas");
var ultimo = frutas.pop();

// agregar al inicio del arreglo
var nuevaFruta = frutas.unshift("uvas");
var borrarFruta = frutas.shift();

var posicion = frutas.indexOf("pera");