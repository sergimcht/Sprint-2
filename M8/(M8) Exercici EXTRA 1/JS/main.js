function elJuego(juego) {
    let i;
    let mensaje = "";
    for (i=0; i<juego.jugadores.length; i++) {
        juego.jugadores[i].jugar(juego.revolver)
        mensaje += juego.rondaToString(i)
        if (juego.finJuego() == true) {
            break;
        }
    }
    if (juego.finJuego() == false) {
        mensaje += "Todos se han salvado esta vez. "
    } else {
        mensaje += "El juego ha acabado. "
    }
    for (i++; i<juego.jugadores.length; i++) {
        if (i!=(juego.jugadores.length-1)) {
            mensaje += `${juego.jugadores[i].nombre}, ` 
        } else {
            mensaje += `y ${juego.jugadores[i].nombre} ` 
        }
    }
    if (juego.finJuego() != false) {
        mensaje += "se han salvado."
    }
    alert(mensaje)
}
function main() {
    let revolver = new Revolver()
    let juego = new Juego(revolver)
    let nJugadores = Number(document.querySelector('input[name="nJugadores"]:checked').value);
    let jugadores = "Los jugadores para esta ronda son:\n"
    let i;
    for (i=1; i<=nJugadores; i++) {
        juego.anadirJugador(new Jugador(i, prompt(`Introduce el nombre del jugador número ${i}`, "").toUpperCase()))
        jugadores += juego.jugadores[i-1].nickname + "\n"
    }
    alert(jugadores)
    elJuego(juego)
}