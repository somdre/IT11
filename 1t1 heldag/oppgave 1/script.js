//definerer variabler
const katalog = document.querySelectorAll("span"); //henter ut alle span elementene fra html dokumentet
const pris = 500;

//kjører gjennom alle span og forandrer den indre texten til pris variablet
for (let i = 0; i < katalog.length; i++) {
    katalog[i].innerText = String(pris);
}

