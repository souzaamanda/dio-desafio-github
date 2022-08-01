"use strict";
const pessoa = {
    nome: 'Amanda',
    idade: 33,
    profissao: 'desenvolvedora'
};
pessoa.idade = 20;
const julia = {
    nome: 'julia',
    idade: 25,
    profissao: 'engenheira'
};
const luisa = {
    nome: 'luisa',
    idade: 25,
    profissao: 'engenheira'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Engenheira"] = 3] = "Engenheira";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Engenheira
};
const Maria = {
    nome: 'Maria',
    idade: 28,
    materias: ['matematica', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Maria.materias);
