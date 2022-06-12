class Mecanico extends Trabajador {
    constructor (nombre, apellido, edad, antiguedad, estudios) {
        super (nombre, apellido, edad, antiguedad);
        this.estudios = estudios;
        this.sueldo = this.sueldo;
    }
    toString() {
        return super.toString() + `como mecánico. ${this.estudios} estudios superiores de mecánica.`
    }

}
