const arrayEscuderias = [];
class Escuderia {
    constructor(nombre, presupuesto, pais) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.pais = pais;
        this.coches = [];
        this.pilotos = [];
        this.mecanicos = [];
    }
    //funiones añadir
    anadirCoche(potencia, velocidad, color, precio) {
        let newCoche = new Coche (potencia, velocidad, color, precio);
        this.coches.push(newCoche);
    }
    anadirPiloto(nombre, apellido, edad, antiguedad, altura, peso) {
        let newPiloto = new Piloto (nombre, apellido, edad, antiguedad, altura, peso);
        this.pilotos.push(newPiloto);
    }
    anadirMecanico(nombre, apellido, edad, antiguedad, estudios) {
        let newMecanico = new Mecanico (nombre, apellido, edad, antiguedad, estudios);
        this.mecanicos.push(newMecanico)
    }
    detallesCoches() {
        let descripcionCoches = "";
        let i;
        for (i=0; i<this.coches.length;i++) {
            descripcionCoches += "Coche " + (i+1) + ":\n" + this.coches[i].toString() + "\n";
        }
        return descripcionCoches
    }
    detallesPilotos() {
        let descripcionPilotos = "";
        let i;
        for (i=0; i<this.pilotos.length;i++) {
            descripcionPilotos += "Piloto " + (i+1) + ":\n" + this.pilotos[i].toString() + "\n";
        }
        return descripcionPilotos
    }
    detallesMecanicos() {
        let descripcionMecanicos = "";
        let i;
        for (i=0; i<this.mecanicos.length;i++) {
            descripcionMecanicos += "Mecánico " + (i+1) + ":\n" + this.mecanicos[i].toString() + "\n";
        }
        return descripcionMecanicos
    }
    toString() {
        return `Escudería ${this.nombre}, procedente de ${this.pais}. Presupuesto total de ${this.presupuesto}M€ para esta campaña.\n\n` + 
        this.detallesCoches() + "\n" + this.detallesPilotos() + "\n" + this.detallesMecanicos()

    }

}