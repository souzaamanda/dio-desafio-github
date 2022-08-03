import React from "react"
import  ReactDOM  from "react-dom"
import Button from "./Button"
import "./styles.css"

function soma(a, b) {
    return a + b
}

function dividir(a, b) {
    alert(a / b)
}
  
function primeiroJSX() {
    return (
      <div className="teste">
        Amanda Souza - Introdução ao ReactJS
        <h1>Soma: {soma(5, 8)}</h1>
      </div>
    )
}

const App = () => {
    return(
        <div className="App">
            {primeiroJSX()}
            <Button onClick={() => dividir(15, 5)} name='Amanda'/>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)