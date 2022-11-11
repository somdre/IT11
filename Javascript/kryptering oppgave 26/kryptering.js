let setning = prompt("skriv setningen du vil kryptere")
console.log(setning)

x = Math.floor(Math.random() * 100) + 1;
console.log("x = " + x);
setning = setning.split("");


function krypter(a) {
    // a = a.split("");
    // console.table[a];
    for (let i = 0; i < a.length; i++) {
        a[i] = String.fromCharCode(a[i].charCodeAt(0)-x);
        // console.log(a[i])
    }
    document.querySelector("#setning").innerHTML = a.toString();
}

function dekrypter(a) {
    // let dekryptertSetning = "";
    for (let i = 0; i < a.length; i++) {
        a[i] = String.fromCharCode(a[i].charCodeAt(0)+x);
    }

    let b = "";
    for (let i = 0; i < a.length; i++) {
        b = b+a[i];
    }
    document.querySelector("#setning").innerHTML = b;
    // return b;
}

function krypter2() {
    krypter(setning);
}


function dekrypter2() {
    dekrypter(setning);
}

document.querySelector("#krypter").addEventListener("click", krypter2);
document.querySelector("#dekrypter").addEventListener("click", dekrypter2);

// krypter(setning)
// console.log(setning)

// setning = dekrypter(setning)
// console.log(setning)

