let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionar (n1: number, n2: number, printar: boolean, frase: string){
    let resultado = n1 + n2
    if (printar){
        console.log(frase + resultado)
    }
    return n1 + n2
}

let printar = true;
let frase = 'O resultado é: ';

if (button) {
    button.addEventListener('click', ()=> {
        if (input1 && input2) {
           console.log(adicionar(Number(input1.value), Number(input2.value), printar, frase))
        }
    })
}