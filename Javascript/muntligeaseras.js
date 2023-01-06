//brukere, hvor mye penger de har, hvilke brukere de skylder penger til, hvilke brukere som skylder de penger og hvor mye
let personer = {
    jonas: {
        penger: 300,
        skylderPengerTil: [["petter", 300], ["hannah", 400]]
    },
    petter: {
        penger: 300,
        skylderPengerTil: [["jonas", 300], ["hannah", 400]]
    },
    hannah: {
        penger: 300,
        skylderPengerTil: [["petter", 300], ["jonas", 400]]
    },
}

//definer en funskjon som lar brukere sende penger til hverandre
function betalPenger(motakker, sender, penger) {
    motakker.penger += penger;
    sender.penger -= penger;
    for (i in sender.skylderPengerTil) {
        if (sender.skylderPengerTil[i][0] === motakker {

        }
    }
}


betalPenger(personer.jonas, personer.petter, 300);
console.log(personer.jonas.penger);