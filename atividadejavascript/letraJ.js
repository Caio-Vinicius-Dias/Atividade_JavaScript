let a = 5;
let b = 10;

let aux = a;  // Guarda o valor de a na variável auxiliar
a = b;        // A recebe o valor de b
b = aux;      // B recebe o valor guardado em aux

console.log(`Novo valor de a: ${a}`);
console.log(`Novo valor de b: ${b}`);
