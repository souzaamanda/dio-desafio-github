function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass) //se não exixtir ele vai colocar, se ja exixtir ele vai tirar o dark-mode
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){ // o contains verifica se dentro da lista de classe de botões exixte dark-mode
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
          
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // esse tipo de chamada retorna uma coleção(lista) e se quiser apenas um elemeto da lista tem que colocar o index dele.
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode)