let stringNumerica = "42";
console.log("Antes da conversão: " + stringNumerica + " (tipo: " + typeof stringNumerica + ")");

let numeroConvertido = Number(stringNumerica);
console.log("Depois da conversão: " + numeroConvertido + " (tipo: " + typeof numeroConvertido + ")");

let outroNumero = 8;
let resultado = numeroConvertido + outroNumero;

console.log("Resultado da soma: " + resultado);
