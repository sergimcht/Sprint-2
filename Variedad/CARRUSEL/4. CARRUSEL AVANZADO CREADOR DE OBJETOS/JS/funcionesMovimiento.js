//CARRUSEL

function mostrar() {
    document.getElementById("imgCarr").src = ("IMG_CARR/") + fotos[i].imagen;
    document.getElementById("imgCarr").title = fotos[i].title;
    document.getElementById("imgName").innerHTML = (i + 1) + ". " + fotos[i].nombre;
    document.getElementById("imgDesc").innerHTML = fotos[i].descripcion;
}

let i = 0;
mostrar();

function palante() {
    i += 1
    if (i < fotos.length) {
        mostrar();
    } else {
        i = 0;
        mostrar();
    } 
}

function patras() {
    i -= 1
    let largo = (fotos.length - 1);
    if (i >= 0) {
        mostrar();
    } else {
        i = largo;
        mostrar();
    } 
}

//REPRODUCTOR

const intervMilis = 1200;

function play(){
    let intervStop = (intervMilis * (fotos.length - i));
    intervalo = setInterval(palante, intervMilis);
    finalizar = setTimeout(stop, intervStop);
    document.getElementById("buttonplay").style.display = "none";
    document.getElementById("buttonstop").style.display = "inline";
    document.getElementById("buttonatras").style.display = "none";
    document.getElementById("buttonalante").style.display = "none";
    document.getElementById("botonesuno").style.display = "none";
}

function stop(){
    document.getElementById("buttonplay").style.display = "inline";
    document.getElementById("buttonstop").style.display = "none";
    document.getElementById("buttonatras").style.display = "inline";
    document.getElementById("buttonalante").style.display = "inline";
    document.getElementById("botonesuno").style.display = "inline";
    clearInterval(intervalo);
}