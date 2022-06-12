class Jugador {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre
        this.nickname = id + ". " + nombre
        this.estado = "vivo"
    }
    //setters
    setEstado(estado) {this.estado = estado} 
    //metodos
    jugar(revolver) { //es el objeto
        revolver.siguienteBala()
        if (revolver.disparar() == true) {
            this.setEstado("muerto")
        }
    }
}