/* ---INSTRUÇÕES---
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1*/

function substituiPares(array){
    if(!array) return -1;
    if(!array.length) return -1;


    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log ('você já é zero!!')
        } else if (array[i] % 2 === 0){
            console.log (`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let lista = [1,11,4,7,81,33,21,90];
console.log(substituiPares(lista)); 