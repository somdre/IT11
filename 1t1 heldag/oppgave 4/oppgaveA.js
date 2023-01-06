//definerer array for datamaterialet
let solheim = [];
let danmark = [];

//hentet fra stackoverflow, random tall i vist intervall: https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers
function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min);
}

//lager dataene
for (let i = 0; i < 1440; i++) {
    solheim.push(getRandomFloat(0, 150));
    danmark.push(getRandomFloat(0, 150));
}

//oppretter en funksjon for å finne gjenomsnitt ogv
function finnVerdier(a) {
    let sum = 0;
    let forsøk = 0;
    let høyesteVerdi = a[0];
    let lavesteVerdi = a[0];

    for (let i = 0; i < a.length; i++) {
        sum += a[i];
        forsøk++;
        if (a[i] > høyesteVerdi) {
            høyesteVerdi = a[i];
        } else if (a[i] < lavesteVerdi) {
            lavesteVerdi = a[i];
        }
    }
    return {gjenomsnitt: sum/forsøk, hoyeste: høyesteVerdi, laveste: lavesteVerdi} 
}

//oppretter objekter med gjenomsnitt ogv
const solheimVerdier = finnVerdier(solheim)
const danmarkVerdier = finnVerdier(danmark)

//printer gjennomsnitt
console.log("gjenomsnittsummen for begge målestasjonene er som følger, solheimsviken: " + String(solheimVerdier.gjenomsnitt) + ", danmarksplass: " + String(danmarkVerdier.gjenomsnitt))

//sjekker hvor det var størt konsentraskjon i gjenomsnitt
if (solheimVerdier.gjenomsnitt > danmarkVerdier.gjenomsnitt) {
    console.log("Det er høyest konsentraskjon av svevestøv i solheim")
} else if (solheimVerdier.gjenomsnitt === danmarkVerdier.gjenomsnitt) {
    console.log("det er lik konsentraskjon i begge stedene")
}else {
    console.log("Det er høyest konsentraskjon av svevestøv på danmarksplass")
}

//sjekker hvor det var høyest verdi
if (solheimVerdier.hoyeste > danmarkVerdier.hoyeste) {
    console.log("Det høyeste verdien ble funnet i solheim som var: " + String(solheimVerdier.hoyeste) + " i forhold til den på danmarksplass som var: " + String(danmarkVerdier.hoyeste) + ".")
} else if (solheimVerdier.hoyeste < danmarkVerdier.hoyeste) {
    console.log("den høyeste verdien ble funnet på danmarksplass som var: " + String(danmarkVerdier.hoyeste) + " i forhold til den i solhiem som var: " + String(solheimVerdier.hoyeste) + ".")
} else {
    console.log("de høyeste verdiene vi fant på begge plassene var like. Den høyeste verdien i solheim var: " + String(solheimVerdier.hoyeste) + " og den høyeste verdien i danmarksplass var: " + String(danmarkVerdier.hoyeste) + ".")
}

//sjekker hvor det var lavest verdi
if (solheimVerdier.laveste > danmarkVerdier.laveste) {
    console.log("Det laveste verdien ble funnet i solheim som var: " + String(solheimVerdier.laveste) + " i forhold til den på danmarksplass som var: " + String(danmarkVerdier.laveste) + ".")
} else if (solheimVerdier.laveste < danmarkVerdier.laveste) {
    console.log("den laveste verdien ble funnet på danmarksplass som var: " + String(danmarkVerdier.laveste) + " i forhold til den i solhiem som var: " + String(solheimVerdier.laveste) + ".")
} else {
    console.log("de laveste verdiene vi fant på begge plassene var like. Den laveste veriden i solheim var: " + String(solheimVerdier.laveste) + " mens den laveste verdien på danmarksplass var: " +  String(danmarkVerdier.laveste) + ".")
}

//oppretter en funksjon som "luker ut" verdier over en viss grenseverdi
function lukUt(a, grenseverdi) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < grenseverdi) {
            b.push(a[i]);
        }
    }
    return b;
}

let test = [140, 130, 142, 25];
console.log("før funksjon lukut: " + String(test) + " etter "+ String(lukUt(test, 140)));