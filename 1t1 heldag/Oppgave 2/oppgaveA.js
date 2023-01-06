//programet triller en terning, random tall mellom 1 og 6 helt til terningen lander på 6. Da slutter programmet å kjøre grunnet at while loopen ikke lenger er sann.

let terning = 0; //definerer variablet terning som kan endres siden det står "let" som brukes i while løkken

while (terning != 6) { // mens verdien av terning ikke er lik 6
    terning = Math.floor(Math.random() * 6) + 1; // terning = et random tall mellom 1 og 6. Math.floor() omgjør til heltal og Math.random() tar et tilfeldig tall mellom <0 og 1>. 
    console.log(terning) // logger veriden av terningen til consolen.
}