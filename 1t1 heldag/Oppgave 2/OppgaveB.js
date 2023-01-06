//programet triller en terning, random tall mellom 1 og 6 helt til terningen lander på 6. Da slutter programmet å kjøre grunnet at while loopen ikke lenger er sann.
let forsøk = 0; // definerer variabel for å telle antall forsøk, dette endres så det er let ikke const
let terning = 0; //definerer variablet derning som kan endres siden det står "let" som brukes i while løkken

while (terning != 6) { // mens verdien av terning ikke er lik 6
    forsøk++; // plusser på 1 til antall forsøk
    terning = Math.floor(Math.random() * 6) + 1; // terning = et random tall mellom 1 og 6. math floor omgjør til heltal. math.random er et tilfeldig tall mellom 0 og 1.
    console.log(terning) // logger veriden av terningen til consolen.
}

//bruker if setninger til å se på forsøk variablet for å avgjøre hvor heldig man var
if (forsøk > 4) {
    console.log("Uflaks!")
} else if (forsøk === 3 || forsøk === 4) {
    console.log("Tja som forventet..")
} else {
    console.log("Flaks, lotto neste!")
}