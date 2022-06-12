let arrayHospitales = [];
class Hospital extends Edificio {
    constructor(nombre, m2, plantas, pacientes) {
        super (nombre, m2, plantas);
        this.pacientes = pacientes;
    }
    //getters
    getPacientes() {return this.pacientes};
    //setters
    setPacientes(pacientes) {this.pacientes = pacientes}; //variar pacientes variará las raciones en repartirComida()
    //metodos
    costeVigilar() {
        let numeroVigilantes = Math.ceil(this.m2 / 1000);
        let sueldoMensual = 1300 * numeroVigilantes;
        return `El coste de la vigilancia será de ${sueldoMensual}€ mensuales, ya que se requiere(n) ${numeroVigilantes} vigilante(s).`;
    }
    repartirComida() {
        return `Se están repartiendo ${this.pacientes} raciones en la comida.`
    }
    toString() {
        return `El HOSPITAL ${this.nombre}, con ${this.m2} m2 y ${this.plantas} plantas de altura, recoge en el momento actual ${this.pacientes} pacientes.\n${this.costeLimpiar()}\n${this.costeVigilar()}\n${this.repartirComida()}`
    }
}