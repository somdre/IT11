// gjør submit knappen trykkbar med eventlistener 
document.querySelector("#knapp").addEventListener("click", function() {
    //henter ut verdiene brukeren skrev inn
    const b = document.querySelector("#b").value;
    const h = document.querySelector("#h").value;
    const a = document.querySelector("#a").value;

    //feilsøker etter brukerfeil
    let skalRegneAreal; //om koden nedenfor aktiveres og vi finner en brukerfeil skal ikke vi regne arealet
    const verdier = [b,h,a] //lager en array for å kunne "bla" gjennom verdiene i for loopen
    for (let i in verdier) {
        skalRegneAreal = false; //setter det til false slik at vi antar at det finnes en feil for hver verdi
        if (verdier[i] === "" || verdier[i] < 0) { //om det er tomt i et av inputfeltene. Vi kan se bortifra at folk skriver bokstaver og annet tul der ettersom type="number" på inputfeltene som bare gjør at det er mulig å skrive tall der. Den eneste brukerfeilen blir da at man ikke har skrevet noe eller at man har skrevet bokstaven e.
            alert("Venligst skriv et tall in i alle inputfeltene og ikke bruk negative tall")
            break //breaker ut av for loopen slik at man ikke alerter mer en 1 gang
        }
        skalRegneAreal = true; //om det ikke finner en feil og derfor ikke breaker blir den true
    }

    // regner ut arealet
    const areal = ((a+b)*h)/2
    
    if (skalRegneAreal === true) { //om den ikke fant neon brukerfeil
        //skriver arealet på bunnen av siden
        document.querySelector("p").innerHTML = "<p>Arealet til trapeset er: " + String(areal) + "</p>"
    }
})

// gjør submit knappen trykkbar med eventlistener 
document.querySelector("#knapp2").addEventListener("click", function() {
    const bottom = document.querySelector("#bottom").value;
    const left = document.querySelector("#left").value;
    const width = document.querySelector("#width").value;
    const right = document.querySelector("#right").value;


    //feilsøker etter brukerfeil
    let skalLageTrapes; //om koden nedenfor aktiveres og vi finner en brukerfeil skal ikke vi lage trapeset
    const verdier = [bottom, left, width, right] //lager en array for å kunne "bla" gjennom verdiene i for loopen
    for (let i in verdier) {
        skalLageTrapes = false; //setter det til false slik at vi antar at det finnes en feil
        if (verdier[i] === "" || verdier[i] < 0) { //om det er tomt i et av inputfeltene. Vi kan se bortifra at folk skriver bokstaver og annet tul der ettersom type="number" på inputfeltene som bare gjør at det er mulig å skrive tall der. Den eneste brukerfeilen blir da at man ikke har skrevet noe.
            alert("Venligst skriv et tall in i alle inputfeltene og ikke bruk negative tall")
            break //breaker ut av for loopen slik at man ikke alerter mer en 1 gang
        }
        skalLageTrapes = true; //om det ikke finner en feil og derfor ikke breaker blir den true
    }
    if (skalLageTrapes === true) { //om den ikke fant neon brukerfeil
        //lager trapeset på bunnen av siden
        document.querySelector("#trapes").style.cssText = "margin-top: 40px; border-bottom: " + String(bottom) + "px solid #555; border-left: " + String(left) + "px solid transparent; border-right: " + String(right) + "px solid transparent; height: 0; width: " + String(width) + "px;"
    }
})


    