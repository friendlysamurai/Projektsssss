var now = new Date();
var datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;





function poga(){
    x = Lietuva.checked
    y = Latvija.checked
    z = Igaunija.checked
    var klase = document.getElementById('klase');
    if(x) {
    info.innerHTML = 'Jūs izvēlējāties akmeni';
    }else if (y) {
    info.innerHTML = 'Jūs izvēlējāties šķēres';
    }else if (z) {
    info.innerHTML = 'Jūs izvēlējāties papīrīti';
}
}

let a= []
 a.push(Math.floor(Math.random()*0))
    for(let i=0; i=3; i++) {
        if (a.includes(i==0)){
            console.log("akmens")
        }
        if (a.includes(i==1)){
            console.log("skeres")
        }
        if (a.includes(i==2)){
            console.log("papirs")
        }
    }
    

    


// for(let i=0; i<=3; i++) {
//     a.push(Math.floor(Math.random()*1)
// }
// console.log()
// if (a.includes(i==0)){
//     console.log("dators izvēlējas akmeni")
// }
// else{
//     console.log("ne")
// }