function crearOrdinadors() {
    let marca = prompt("Escribe el nuevo valor para marca:", "");
    let modelo = prompt("Escribe el nuevo valor para modelo:", "");
    let procesador = prompt("Escribe el nuevo valor para procesador:", "");
    let ram = prompt("Escribe el nuevo valor para RAM:", "");
    let memoria = prompt("Escribe el nuevo valor para memoria:", "");

    let nuevoPc = new Ordenadores(marca, modelo, procesador, ram, memoria);
    arrayOrdenadores.push(nuevoPc);

}
//funciones consultar
function consultarMarca(numPc) {
    document.getElementById("marca" + numPc).innerHTML = arrayOrdenadores[numPc-1].getMarca();
}
function consultarModelo(numPc) {
    document.getElementById("modelo" + numPc).innerHTML = arrayOrdenadores[numPc-1].getModelo();
}
function consultarProcesador(numPc) {
    document.getElementById("procesador" + numPc).innerHTML = arrayOrdenadores[numPc-1].getProcesador();
}
function consultarRam(numPc) {
    document.getElementById("ram" + numPc).innerHTML = arrayOrdenadores[numPc-1].getRam();
}
function consultarMemoria(numPc) {
    document.getElementById("memoria" + numPc).innerHTML = arrayOrdenadores[numPc-1].getMemoria();
}
//funciones cambiar
function cambiarProcesador(numPc) {
    let nuevoProcesador = prompt("Introduce el nuevo valor para procesador", (arrayOrdenadores[numPc-1].getProcesador()))
    arrayOrdenadores[numPc-1].setProcesador(nuevoProcesador);
    document.getElementById("procesador" + numPc).innerHTML = arrayOrdenadores[numPc-1].getProcesador();
}
function cambiarRam(numPc) {
    let nuevoRam = prompt("Introduce el nuevo valor para RAM", (arrayOrdenadores[numPc-1].getRam()))
    arrayOrdenadores[numPc-1].setRam(nuevoRam);
    document.getElementById("ram" + numPc).innerHTML = arrayOrdenadores[numPc-1].getRam();
}
function cambiarMemoria(numPc) {
    let nuevoMemoria = prompt("Introduce el nuevo valor para memoria", (arrayOrdenadores[numPc-1].getMemoria()))
    arrayOrdenadores[numPc-1].setMemoria(nuevoMemoria);
    document.getElementById("memoria" + numPc).innerHTML = arrayOrdenadores[numPc-1].getMemoria();
}
//funcion ejecutar
function ejecutarPrograma(numPc) {
    let programa = prompt("¿Qué programa se va a ejecutar?", "");
    alert(arrayOrdenadores[numPc-1].comprobarPrograma(programa));
}
//funcion atributos
function verInfo(numPc) {
    alert(arrayOrdenadores[numPc-1].toString(numPc));
}
