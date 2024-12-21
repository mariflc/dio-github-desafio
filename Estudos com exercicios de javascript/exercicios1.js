/*Contar vogais
Mariana também quer contar as vogais em palavras para um jogo de palavras cruzadas. 
Crie uma função chamada contarVogais que receba uma palavra e diga quantas vogais ela tem.

Dica: As vogais são 'a', 'e', 'i', 'o' e 'u'. Verifique letra por letra com um loop.

*/
palavra = 'Fubanguice';
const vogais = ['a','e', 'i','o','u','A','E','I','O','U']
let contador = 0;
const letras = [];

function contarVogais(){
    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra[i];
    for (let v = 0; v < vogais.length; v++) {
        if (letra === vogais[v]){
            contador++
            letras.push(vogais[v])
        }
    }
}
    return `[${letras}] ou seja, essa qtd: ${contador} `;
}
   
console.log(`A palavra "${palavra}" tem essas vogais `,contarVogais())

    
