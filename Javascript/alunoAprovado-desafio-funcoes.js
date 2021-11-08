/* ---INSTRUÇÕES---
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.*/

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 3,
		turma: '2C',
	},
];


function alunosAprovados (arr, media){
   let aprovados = []; //declara fora do loop para não criar um novo array a cada loop, se não vai reinicializar essa varial sempre..
   
    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i]; //"object destructuring" para utilizar apenas as propiedades que queremos, desconsiderando "turma"

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}


console.log(alunosAprovados(alunos,5));