class Piloto extends Trabajador {
    constructor (nombre, apellido, edad, antiguedad, altura, peso) {
        super (nombre, apellido, edad, antiguedad);
        this.altura = altura;
        this.peso = peso;
        this.sueldo = this.sueldo + 50000
    }
    toString() {
        return super.toString() + `como piloto. Altura: ${this.altura}cms. Peso: ${this.peso}kg.`
    }

}

