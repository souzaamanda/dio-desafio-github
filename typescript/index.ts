console.log ('TypeScript');

/* Types -> define uma estrutura de dados para os parametros de classe ou função pra fazer a validação deles*/

/* Interfaces -> são contratos para implementar as classes*/

/*
interface IAnimal {
    nome:  string;
    tipo: 'terrestre' | 'aquático';
}

const animal:IAnimal = {
    nome: 'Elefante',
    tipo:"terrestre"
}

*/

const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (event)=>{
    //console.log('digitei')
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})

/* Generic Types */

//quando não sabe o que vai receber coloca-se a letra T
function addApendiceLista <T>(array: any[], valor: T) {
    return array.map (item => item + valor)
}

addApendiceLista([1, 2, 3], 1)
addApendiceLista(['a','b','c'], 'd')


/* desenvolvendo condicionais a partir de parametros */

interface IUsuario {
    id: string,
    email: string
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        // redirecionar para a area de admin
    }

    // redirecionar para a area de usuario
}


/* Utilizando o caracter '?' para variaveis opcionais */

interface IUsuari {
    id: string,
    email: string,
    cargo?: 'gerente' | 'coordenador' | 'supervisor'| 'funcionário'
}

function redirecionar(usuario:IUsuari) {
    if (usuario.cargo){
        // redirecionar para usuario.cargo
    }

    // redirecionar para a area de usuario comum caso não possua cargo
}

/* criando variaves com propriedade readonly e private */

/* Importando bibliotecas com TypeScript, sem mexer nos types que estão definidos dentro delas 

cria-se o arquivo typings.d.ts

*/



