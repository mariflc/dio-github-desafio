/*Reverter String
Mariana está tentando criar mensagens enigmáticas invertendo palavras. 
Ajude-a criando uma função chamada reverterString que receba uma palavra 
e retorne a mesma palavra, mas invertida.

Dica: Você pode transformar a string em um array com split, usar reverse 
e juntar de novo com join.

fubanga
agnabuf
*/

const palavra = 'PROGRAMAÇÃO';
let palavrArray = []

function reverterString(){
    palavrArray = palavra.split('');
    palavrArray.reverse();
    return palavrArray.join('');
}
console.log(`A palavra ${palavra} ao contrário é: `,reverterString())