class Trabajador {
    constructor (nombre, apellido, edad, antiguedad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.sueldo = 50000 + 10000 * antiguedad;
    }
    toString() {
        return `${this.nombre} ${this.apellido}, de ${this.edad} años de edad, lleva ${this.antiguedad} años en la escudería `
    }

}