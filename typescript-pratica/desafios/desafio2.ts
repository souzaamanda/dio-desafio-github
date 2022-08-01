// Como podemos melhorar o esse código usando TS? 

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Ocupacao
}

enum Ocupacao {
    Atriz,
    Padeiro,
}

let pessoa1: Pessoa ={
    nome: "Maria",
    idade: 29,
    profissao: Ocupacao.Atriz
}

let pessoa2: Pessoa ={
    nome: "Roberto",
    idade: 19,
    profissao: Ocupacao.Padeiro
}

let pessoa3: Pessoa ={
    nome: "Laura",
    idade: 32,
    profissao: Ocupacao.Atriz
}

let pessoa4: Pessoa ={
    nome: "Carlos",
    idade: 39,
    profissao: Ocupacao.Padeiro
}