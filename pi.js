let now = new Date();
let datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

let sts = 0;
let sks = 0;  
let pi = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899"; 
let daudz = pi.length;
let beigt = function(){}

info.innerHTML = "π = 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899";

function sakt() {
    info.innerHTML = "-";
    rez.innerHTML = "Tu atcrējies _ skaitļus!";
    sts = 1;
    checkStatus();
}

function checkStatus() {
    if (sts == 0) {
        beigt = function() {}; 
    } else if (sts == 1) {
        beigt = function() {
            info.innerHTML = "π = 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899";
            sks = 0; 
            let iv = ievade.value; 
            for (let i = 0; i < daudz; i++) {
                if (iv[i] === pi[i]) {
                    sks++;
                    rez.innerHTML = "Tu atcrējies " + sks + " skaitļus!";
                }
            }
        }
    }
}











// document.write(ivd)
// document.write(zez.innerHTML = ievade.value)
