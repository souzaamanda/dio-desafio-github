/* ---INSTRUÇÕES---
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

//solução 1
function verificaPalidromo(string){
    if(!string) return;

    return string.split('').reverse().join('') === string;
}

console.log(verificaPalidromo('gato'));

//solução 2

function verificaPalidromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length/2; i++){
        if (string[i] !== string[string.length -1 -i]){ //indice começa no 0 , mas a length começa no 1
            return false; // os [] serve para acessar o caracter que existe nesse número
        }
    }

    return true;
}

console.log(verificaPalidromo2('gato'))