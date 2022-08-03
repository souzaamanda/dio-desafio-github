import React from "react";

function Button (props) {

    //desestruturação
    const { name, onClick} = props

    return(
        //o componente tem que ser o mais puro possivel, sem estado, para ser melhor reaproveitado
        //ele vai receber um callback e vai executar um callback, ele não tem regras
        <button onClick={onClick}>{name}</button>
    )
}

export default Button