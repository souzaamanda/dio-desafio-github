const BASE_URL = "https://thatcopy.pw/catapi/rest/"; //para usar a mesma variavel
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');


const getCats = async () => { // função para conseguir pegar as imagens
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();  // vai receber uma string e converta pra .json
    
        return json.webpurl; // webpurl é um tipo de imagem comprimida
    } catch (e){
        console.log (e.message);
    }
};

const loadImg = async () => {
    catImg.src =await getCats(); // vai colocar a url que receber do getCats
}

catBtn.addEventListener('click', loadImg);

loadImg();
