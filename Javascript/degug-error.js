function recebe (arr, num){
  try{
    if(!arr && !num) throw new ReferenceError('envie os parametros');

    if(typeof arr !== 'object') throw new TypeError ('array precisa ser do tipo object');

    if(typeof num !== 'number') throw new TypeError ('o num precisa ser do tipo number');

    if (arr.length !== num) throw new RangeError ('tamanho inválido'); // indica um erro quando um valor não está no conjunto ou intervalo de valores permitidos
  
    return arr;
}
  catch(e) {
    if(e instanceof ReferenceError) { //testa a presença da função 
        console.log('este erro é do tipo ReferenceError!');
        console.log (e.message)
        // console.log(e.name)
        // console.log (e.stack)
    } else if(e instanceof TypeError) {  
        console.log('este erro é do tipo TypeError!');
        console.log (e.message)
        // console.log(e.name)
        // console.log (e.stack)
  } else if(e instanceof RangeError) {  
      console.log('este erro é do tipo RangeError!');
      console.log (e.message)
      // console.log(e.name)
      // console.log (e.stack)
  } else {
    console.log('erro inesperado' + e);
    }
  }
}

console.log(recebe());
console.log(recebe(5,5));
console.log(recebe([],'a'));
console.log(recebe([], 5));
console.log(recebe([1,2,3,4,5], 5));
