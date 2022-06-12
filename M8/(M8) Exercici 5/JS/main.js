
function azulCirculo() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = (canvas.width / 2) + Number(document.getElementById("x1").value) * 10;
    const centerY = (canvas.height / 2) - Number(document.getElementById("y1").value) * 10;
    const radius = (document.getElementById("r1").value) * 10;

    context.beginPath();
    context.fillStyle = '#00000000';
    context.strokeStyle = '#2600ff';
    context.lineWidth = 6;

    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}
function rojoCirculo() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const centerX = (canvas.width / 2) + Number(document.getElementById("x2").value) * 10;
    const centerY = (canvas.height / 2) - Number(document.getElementById("y2").value) * 10;
    const radius = (document.getElementById("r2").value) * 10;

    context.beginPath();
    context.fillStyle = '#00000000';
    context.strokeStyle = '#ff0000';
    context.lineWidth = 4;

    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}
function comprobacionesCirculo(circulo1, circulo2) {
    document.getElementById("1").innerHTML = circulo1.distanciaCentros(circulo2);
    document.getElementById("2").innerHTML = circulo1.igualdadCirculos(circulo2);
    document.getElementById("3").innerHTML = circulo1.sonConcentricos(circulo2);
    document.getElementById("4").innerHTML = circulo1.igualdadRadio(circulo2);
    document.getElementById("5").innerHTML = circulo1.sonTangentes(circulo2);
    document.getElementById("6").innerHTML = circulo1.sonSecantes(circulo2);
    document.getElementById("7").innerHTML = circulo1.seTocan(circulo2);
}
function mainFunction() {
    document.getElementById("datosCirculos").style.display= "inline"
    let pX1 = Number(document.getElementById("x1").value);
    let pY1 = Number(document.getElementById("y1").value);
    let r1 = Number(document.getElementById("r1").value);
    let pX2 = Number(document.getElementById("x2").value);
    let pY2 = Number(document.getElementById("y2").value);
    let r2 = Number(document.getElementById("r2").value);
    let center1 = new Punto (pX1, pY1);
    let circulo1 = new Circulo(center1, r1);
    let center2 = new Punto (pX2, pY2);
    let circulo2 = new Circulo(center2, r2);
    comprobacionesCirculo(circulo1, circulo2);
}
