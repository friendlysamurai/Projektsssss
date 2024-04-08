let now = new Date();
let datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;





// function poga(){
//     x = akmens.checked
//     y = skeres.checked
//     z = papirs.checked
//     let klase = document.getElementById('klase');
//     if(x) {
//     info.innerHTML = 'Jūs izvēlējāties akmeni';
//     }else if (y) {
//     info.innerHTML = 'Jūs izvēlējāties šķēres';
//     }else if (z) {
//     info.innerHTML = 'Jūs izvēlējāties papīrīti';

// let a=Math.floor(Math.random()*3)
// if (a==0){
//     console.log("akmens")
// }
// else if(a==1){
//     console.log("skeres")
// }
// else if (a==2){
//     console.log("papirs")
// }}}

function poga() {
    let x = akmens.checked;
    let y = skeres.checked;
    let z = papirs.checked;
    let klase = document.getElementById('klase');
    let info = document.getElementById('info'); 
    if (x) {
        info.innerHTML = 'Jūs izvēlējāties akmeni';
    } else if (y) {
        info.innerHTML = 'Jūs izvēlējāties šķēres';
    } else if (z) {
        info.innerHTML = 'Jūs izvēlējāties papīrīti';
    }

    let a = Math.floor(Math.random() * 3);
    if (a == 0) {
        info.innerHTML += " un dators izvēlējās akmeni";
    } else if (a == 1) {
        info.innerHTML += " un dators izvēlējās šķēres";
    } else if (a == 2) {
        info.innerHTML += " un dators izvēlējās papīrīti";
    }

    let x
    if (a) {
        info.innerHTML += "<br> Tu uzvarēji!"
    }
    else if (x) {
        info.innerHTML += "<br> Tu zaudēji!"
    }
}
