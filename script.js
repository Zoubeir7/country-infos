let infos = document.querySelector("section")

var capitaldiv = document.createElement("div")
var flagdiv = document.createElement("div")
var contrydiv = document.createElement("div")
var continentdiv = document.createElement("div")


function search() {
    let textContry = document.querySelector(".text").value
    contrydiv.innerHTML = `<span>pays</span><br><p>${textContry} </p>`

    let url = "https://restcountries.com/v3.1/name/" + textContry;
    fetch(url).then(response => response.json().then(data => {

        const country = data[0];
        const capital = country.capital;
        const continent = country.continents;
        const flag = country.flags.svg

        capitaldiv.innerHTML = `<span>capital</span><br><p>${capital} </p>`
        continentdiv.innerHTML = `<span>continent</span><br><p>${continent} </p>`
        flagdiv.innerHTML = `<span>Drapeu</span><br><img src="${flag}">`

        infos.appendChild(contrydiv)
        infos.appendChild(continentdiv)
        infos.appendChild(capitaldiv)
        infos.appendChild(flagdiv)
    }))


}