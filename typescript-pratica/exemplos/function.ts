type input = number | string

function somarValores (input1: input, input2: input) {
    if (typeof input1 === "string"  || typeof input2 === "string") {
        return input1.toString() + input2.toString()
    } else {
        return input1 + input2;
    }
}

console.log (somarValores(1, 5));
console.log (somarValores('ola', ', tudo bem?'));
console.log (somarValores('1', 5));

// definindo o tipo de retorno da função

function pritaValoresNumericos(n1: number, n2: number): number {
    return n1 + n2;
}


//Void -> ausencia de retorno
function pritaValores(n1: number, n2: number): void {
    return n1 + n2;
}

//callback -> função que vc passa como parametro, ela vai rodar quando uma certa ação ocorrer
function somarValoresNumericosETratar(n1: number, n2: number, callback: (numero: number): number): number {
    let resultado = n1 +n2;
    return callback(resultado);
}

function aoQuadrado (numero: number): number {
    return numero * numero
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))