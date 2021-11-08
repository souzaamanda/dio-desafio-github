/* ---INSTRUÇÕES---
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

// retornando um set com valores unicos e não um array

function valoresUnicos(arr){
     const mySet = new Set(arr);

     return mySet;
}

console.log(valoresUnicos(meuArray))

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; //tecnica 'spreat[...]' que vai para cada elemento do set vai adicionar dentro do Arrey
    //return [mySet];  dessa forma so esta colocando um set dentro de um Arrey
}

console.log(valoresUnicos(meuArray))
