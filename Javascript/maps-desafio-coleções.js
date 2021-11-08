/* ---INSTRUÇÕES---
Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.*/

function getAdmins (map) {
    let admins = [];

    for([key, value] of map){ // manipula o a chave e o valor juntos
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Romeu', 'Admin');
usuarios.set('Amanda', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Joana', 'Admin');

console.log(getAdmins(usuarios));