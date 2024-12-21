/*Números de 1 a N

Sara quer que seu programa mostre todos os 
números de 1 até um número N que ela escolher. 
Escreva um programa que receba N e exiba 
esses números no console.

Dica: Use um loop for ou while para iterar de 1 até N.
*/

const numeroEscolhido = 8;
const arrayNumeros = [];
let adicionarMaisUm = 1;


function exibirNumeros(n){
    for (let i = 0; i < n; i++) {
        arrayNumeros.push(adicionarMaisUm); 
        adicionarMaisUm++;       
    }
    return arrayNumeros;
}
console.log(`O número escolhido foi ${numeroEscolhido}, 
    os números de 1 até ele são: `,exibirNumeros(numeroEscolhido));