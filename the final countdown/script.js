let timer;
let startTimer;
let countDownTimer = document.querySelector("#countDownTimer");
let x = "False";
let musikkFerdig = new Audio("lofi-study-112191.mp3");
let buttonStart = document.querySelector("#start");
let buttonEnd = document.querySelector("#end");
buttonStart.addEventListener("click", start);
buttonEnd.addEventListener("click", end);

function start() {
    if (x == "False") {
        document.querySelector("#timer").classList.toggle("active");
        countDownTimer.classList.toggle("active");
        timer = document.querySelector("#timer").value;
        timer = parseInt(timer);
        countDownTimer.innerText = timer;
        startTimer = timer;
        interval = setInterval(countDown, 1000);
    }
}

function countDown() {
    musikkFerdig.play();
    x = "True";
    timer--;
    if (timer <=0) {
        countDownTimer.innerText = "Ferdig!";
        clearInterval(interval);
        musikkFerdig.pause();
    }
    else {
        countDownTimer.innerText = timer;
    }   
}

function end() {
    musikkFerdig.pause();
    x = "False";
    clearInterval(interval);
    document.querySelector("#timer").classList.toggle("active");
    countDownTimer.classList.toggle("active");
}

