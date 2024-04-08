let now = new Date();
let datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

function poga() {
    let x = akmens.checked;
    let y = skeres.checked;
    let z = papirs.checked;
    let klase = document.getElementById('klase');
    let info = document.getElementById('info');
    let rezultats = document.getElementById('rezultats');

    let datoraIzvele;
    if (x) {
        info.innerHTML = 'Jūs izvēlējāties akmeni';
        datoraIzvele = Math.floor(Math.random() * 3);
        if (datoraIzvele == 0) {
            info.innerHTML += " un dators izvēlējās akmeni";
        } else if (datoraIzvele == 1) {
            info.innerHTML += " un dators izvēlējās šķēres";
        } else if (datoraIzvele == 2) {
            info.innerHTML += " un dators izvēlējās papīrīti";
        }
    } else if (y) {
        info.innerHTML = 'Jūs izvēlējāties šķēres';
        datoraIzvele = Math.floor(Math.random() * 3);
        if (datoraIzvele == 0) {
            info.innerHTML += " un dators izvēlējās akmeni";
        } else if (datoraIzvele == 1) {
            info.innerHTML += " un dators izvēlējās šķēres";
        } else if (datoraIzvele == 2) {
            info.innerHTML += " un dators izvēlējās papīrīti";
        }
    } else if (z) {
        info.innerHTML = 'Jūs izvēlējāties papīrīti';
        datoraIzvele = Math.floor(Math.random() * 3);
        if (datoraIzvele == 0) {
            info.innerHTML += " un dators izvēlējās akmeni";
        } else if (datoraIzvele == 1) {
            info.innerHTML += " un dators izvēlējās šķēres";
        } else if (datoraIzvele == 2) {
            info.innerHTML += " un dators izvēlējās papīrīti";
        }
    }

    if ((x && datoraIzvele == 1) || (y && datoraIzvele == 2) || (z && datoraIzvele == 0)) {
        rezultats.innerHTML = "<br>Jūs uzvarējāt!";
    } else if ((x && datoraIzvele == 2) || (y && datoraIzvele == 0) || (z && datoraIzvele == 1)) {
        rezultats.innerHTML = "<br>Dators uzvarēja!";
    } else {
        rezultats.innerHTML = "<br>Neizšķirts!";
    }
}