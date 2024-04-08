let now = new Date();
let datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

let pi = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899"; 
let daudz = pi.length;

info.innerHTML = "π = 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899";
ievade.readOnly = true;

function sakt() {
    info.innerHTML = "";
    rez.innerHTML = "Tu atcrējies _";
    ievade.readOnly = false;
    ievade.value = "";
}

function beigt () {
        info.innerHTML = "π = 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899";
        let sks = 0; 
        let iv = ievade.value; 
        for (let i = 0; i < daudz; i++) {
            if (iv[i] === pi[i] && iv[i]!=".") {
                sks++;}}
        if (sks === 1) {rez.innerHTML = "Tu atcrējies " + sks + " skaitli!";}
        else if (sks>1) {rez.innerHTML = "Tu atcrējies " + sks + " skaitļus!";}
        else if (sks === 0) {rez.innerHTML = "Tu visu aizmirsi!";}
        ievade.readOnly = true;
    }











// document.write(ivd)
// document.write(zez.innerHTML = ievade.value)
