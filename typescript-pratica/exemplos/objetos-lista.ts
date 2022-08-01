const pessoa = {
    nome: 'Amanda',
    idade: 33,
    profissao: 'desenvolvedora' 
}

pessoa.idade = 20;

const julia: (nome: string, idade: number, profissao: string) = {
    nome: 'julia',
    idade: 25,
    profissao: 'engenheira'
}

const luisa: (nome: string, idade: number, profissao: string) = {
    nome: 'luisa',
    idade: 25,
    profissao: 'engenheira'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Engenheira
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Engenheira
}

const Maria: Estudante = {
    nome: 'Maria',
    idade: 28,
    materias: ['matematica', 'programação']
}

function listar (lista: string[]) {
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(Maria.materias)