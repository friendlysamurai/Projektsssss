let now = new Date();
let datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

let daudz = 80
let sts = 0
let zez = 0
let ivd = [ievade.value]

pi = [3.14159265358979323846264338327950288419716939937510582097494459230781640628620899]

info.innerHTML = "π=3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899"

function sakt (){
    info.innerHTML = "-"
    ez.innerHTML = "Tu atcrējies _ skaitļus!"
}

   function beigt (){
    info.innerHTML = "π=3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899"
    rez.innerHTML = "Tu atcrējies "+zez+" skaitļus!";
   }
   

for (let i=0; i=daudz; i++) {
if (pi[i] == ivd[i] ) {
    zez = zez+1
}
else if (pi[i] != ivd[i]) {
    daudz = i-1
}

}