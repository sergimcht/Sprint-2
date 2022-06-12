class Juego {
    constructor(revolver) {
        this.jugadores = [];
        this.revolver = revolver;
    }
    anadirJugador(jugador) {
        this.jugadores.push(jugador)
    }
    finJuego() {
        let muerto;
        let i;
        for (i=0; i<this.jugadores.length; i++) {
            muerto = this.jugadores.filter(muerto => muerto.estado == "muerto")
        }
        if (muerto.length > 0) {
            return true
        } else {
            return false
        }
    }
    rondaToString(i) {
        let mensaje = `El jugador ${this.jugadores[i].nombre} se dispara.`
        if (this.jugadores[i].estado == "muerto") {
            mensaje += ` Ha encontrado la bala y ha muerto. La bala estaba en la posición ${this.revolver.posBala}.\n`
        } else {
            mensaje += ` Se salva, por ahora. En la posición ${this.revolver.posActual} no está la bala.\n`
        }
        return mensaje;
    }
}