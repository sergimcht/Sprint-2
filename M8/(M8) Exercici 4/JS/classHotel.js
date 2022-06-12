let arrayHoteles = [];
class Hotel extends Edificio {
    constructor(nombre, m2, plantas, habitaciones) {
        super (nombre, m2, plantas);
        this.habitaciones = habitaciones;
    }
    //getters
    getHabitaciones() {return this.habitaciones};
    //metodos
    costeVigilar() {
        let numeroVigilantes = Math.ceil(this.m2 / 1000);
        let sueldoMensual = (1300 + 500) * numeroVigilantes;
        return `El coste de la vigilancia será de ${sueldoMensual}€ mensuales, ya que se requiere(n) ${numeroVigilantes} vigilante(s).`;
    }
    servicioHabitaciones() {
        let numeroTrabajadores = Math.ceil(this.habitaciones / 20);
        let sueldosTrabajadores = numeroTrabajadores * 1000;
        return `El coste del servicio de habitaciones será de ${sueldosTrabajadores}€ mensuales, ya que se requiere(n) ${numeroTrabajadores} trabajador(es).`;;[numeroTrabajadores, sueldosTrabajadores]; 
    }
    toString() {
        return `El HOTEL ${this.nombre}, con ${this.m2} m2 y ${this.plantas} plantas de altura, consta de ${this.habitaciones} habitaciones en total.\n${this.costeLimpiar()}\n${this.costeVigilar()}\n${this.servicioHabitaciones()}`
    }
}
