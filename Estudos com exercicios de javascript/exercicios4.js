/* Clara tem uma lista de números e quer descobrir qual é o 
maior deles. Escreva uma função chamada maximoArray 
que receba um array de números e retorne o maior número.

Dica: Use um loop para comparar cada número com o maior atual.
*/

const numeros = [2,5,10,17,189,190];

function maximoArray(array){
    return Math.max(...array);
}
function minArray(array){
    return Math.min(...array);
}
console.log(`O maior número desse array [${numeros}] é`,maximoArray(numeros))
console.log(`O menor número desse array [${numeros}] é`,minArray(numeros))

