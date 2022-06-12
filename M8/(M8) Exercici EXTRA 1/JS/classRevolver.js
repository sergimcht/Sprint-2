class Revolver {
    constructor () {
        this.posActual = Math.floor(Math.random() * 6) + 1
        this.posBala = Math.floor(Math.random() * 6) + 1
    }
    //setters
    setActual(posActual) {this.posActual = posActual};
    setBala(posBala) {this.posBala = posBala};
    //metodos
    siguienteBala() {
        if (this.posActual != 6) {
            this.posActual += 1
        } else {
            this.posActual = 1
        }
    }
    disparar() {
        if (this.posActual == this.posBala) {
            return true
        } else {
            return false
        }
    }
    informar() {
        return `La posición actual es la ${this.posActual}. La bala se encuentra en la posición ${this.posBala}.`
    }
}