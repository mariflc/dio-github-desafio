/* Roberto está aprendendo sobre matemática e quer 
calcular o fatorial de um número. Crie uma função chamada 
fatorial que receba um número e retorne o fatorial dele.

Dica: O fatorial de 5 é 5 * 4 * 3 * 2 * 1. 
Use um loop para multiplicar os números.
*/

const numeroEscolhido = 5;

let array = [];

function fatorial(){
    let resultado = 1
    for (let i = 1; i <= numeroEscolhido; i++) {
        array.push(i); 
        resultado *= i;
    }
    return `${array.reverse('').join(' * ')}
    a mult é ${resultado}`; 

}

console.log(fatorial())

