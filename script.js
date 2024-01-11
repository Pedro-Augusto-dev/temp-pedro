


const key ="a6c23599b211982f09163e4724613422"


function colocarDados(dados){

    console.log(dados)
    document.querySelector(".tempLoc").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temGraus").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".tempIcon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".tempScript").innerHTML = dados.weather[0].description
    document.querySelector(".tempUmi").innerHTML = "umidade: " + dados.main.humidity + "%"
    
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( reposta => reposta.json())

    colocarDados(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".tempInp").value


    buscarCidade(cidade)

}