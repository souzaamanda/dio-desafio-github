// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){ // função callback integrada
        return item * this.value;
    }, thisArg); //argumento
}

// se mandar maça como argumento this,ele vai olhar para a maça e vai fazer * o item do array
// da mesma forma que mandar a laranja ele vai * por um valor diferente

const nums = [1,2];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 2
    })
}

const nums1 = [2,4,6,8,10];

console.log(mapSemThis(nums1));
//array original continua com os valores inalterados
//foi gerado um novo array
//solução sem this é a mais utilizada


// FILTER
// Filtre e retorne todos os números pares de um array.

function filtraPares (arr){
    return arr.filter(callback)
}

function callback(item) { //função callback separada
    return item % 2 ===0; //numeros pares
}

const meuArray = [2,5,7,8,10,25,33,78]

console.log(filtraPares(meuArray));


// REDUCE (exer 1)
// Some todos os números de um array

function somaNumeros(arr){
    return arr.reduce(function(prev,current){ //valor anterior(prev) e valor atual(current)
        return prev + current;
    })
}

// o "prev" é tb chamado de acumulador, todo resultado de cada rodada de reduce vai definir o prox valor do previus
// como não mandou valor inicial ele considera o primeiro numero da array que no caso é 1

const meuArray2 = [1,2];

console.log(somaNumeros(meuArray2));

// REDUCE (exer 2)
// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
//Calcule qual será o saldo final após subtrair todos os preços da lista enviada

const listaDeCompras = [
    {
        name:'arroz',
        preco: 8
    },

    {
        name:'oleo',
        preco: 10
    },

    {
        name: 'frango',
        preco: 37
    },

    {
        name: 'batata',
        preco: 12
    }
];

const saldoDisponivel = 100;

function calculasaldo (saldoDisponivel, listaDeCompras){
  return listaDeCompras.reduce(function(previus,current){
      return previus-current.preco
  }, saldoDisponivel);  // valor para inicializar o acumulador
}

console.log(calculasaldo(saldoDisponivel,listaDeCompras));

