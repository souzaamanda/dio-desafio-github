"use strict";
// Como podemos melhorar o esse código usando TS? 
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Atriz"] = 0] = "Atriz";
    Ocupacao[Ocupacao["Padeiro"] = 1] = "Padeiro";
})(Ocupacao || (Ocupacao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Ocupacao.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Ocupacao.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Ocupacao.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 39,
    profissao: Ocupacao.Padeiro
};
