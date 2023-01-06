//terninger i html filen
const terningOmråde = document.querySelector("#terning");
const knapp = document.querySelector("#knapp");
const utskrift = document.getElementById("utskrift")
console.log("neg");

let randomTerning ="penis";
let terninger = "penis";
let antallForsøk = 0

let terningFørste = {
    referanse: document.querySelector("#terningFørste"),
    aktivert: false,
}

let terningAndre = {
    referanse: document.querySelector("#terningAndre"),
    aktivert: false,
}

let terningTredje = {
    referanse: document.querySelector("#terningTredje"),
    aktivert: false,
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random() {
    antallForsøk++;
    terninger = [terningFørste, terningAndre, terningTredje]
    for (let i = 0; i < 3; i++) {
        if (terninger[i].aktivert === false) {
            //velger en random terning mellom 1 og 6
            randomTerning = "bilderavterning"+ "/" + "_" + String(getRandomInt(1,6)) + ".png";
            console.log(randomTerning)
            terninger[i].referanse.src=randomTerning;
            }
        }
    }
    console.log("APEKATT", terninger[0].referanse, terninger[1].referanse, terninger[2].referanse);
    if (terninger[0].referanse === terninger[1].referanse === terninger[2].referanse) {
        utskrift.innerText = "Du du brukte " + String(antallForsøk) + " på å få 3 like.";
}

function trykkPåFørsteTerning() {
    if (terningFørste.aktivert === false) {
        terningFørste.aktivert = true;
    } else {
        terningFørste.aktivert = false;
    }
}
function trykkPåAndreTerning() {
    if (terningAndre.aktivert === false) {
        terningAndre.aktivert = true;
    } else {
        terningAndre.aktivert = false;
    }
}
function trykkPåTredjeTerning() {
    if (terningTredje.aktivert === false) {
        terningTredje.aktivert = true;
    } else {
        terningTredje.aktivert = false;
    }
}

terningFørste.referanse.addEventListener("click", trykkPåFørsteTerning)
terningAndre.referanse.addEventListener("click", trykkPåAndreTerning)
terningTredje.referanse.addEventListener("click", trykkPåTredjeTerning)


knapp.addEventListener("click", random);