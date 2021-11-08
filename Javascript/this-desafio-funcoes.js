/* ---INSTRUÇÕES---
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'João',
    idade: 11
};

const pessoa2 = {
    nome: 'Joana',
    idade: 89
};

const animal = {
    nome: 'Romeu',
    idade: 7
};

console.log(calculaIdade.call(pessoa1, 10)); // o call é separado por virgula. depois vem o parametro da função.
console.log(calculaIdade.apply(pessoa1, [10])); // com o apply sempre usa []

