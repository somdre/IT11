function log() {
    katalog = document.querySelectorAll("p");
    for (let i = 0; i < katalog.length; i++) {
        console.log(katalog[i].innerText);
    }
}

setInterval(log, 1000)