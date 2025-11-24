const readline = require("readline-sync");
let numero;

while (true) {
let dato = readline.question("Escribe un numero por favor: ");
numero = Number(dato);

if (isNaN(numero)) {
    console.log("Por favor escribe un número válido");
} else {
    break;
            }
        }

let resultado = 1; 

for (let i = 1; i <= numero; i++)
     { resultado *= i} 

console.log("Tu resultado factorial es: " + resultado);


