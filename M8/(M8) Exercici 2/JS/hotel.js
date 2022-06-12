arrayHoteles = [];
class Hoteles {
    constructor(nombre, habitaciones, plantas, superficie) {
        this.nombre = nombre;
        this.habitaciones = habitaciones;
        this.plantas = plantas;
        this.superficie = superficie;
    }
    //getters
    getNombre() {return this.nombre};
    getHabitaciones() {return this.habitaciones};
    getPlantas() {return this.plantas};
    getSuperficie() {return this.superficie};
    //setters
    setNombre(nombre) {this.nombre = nombre};
    setHabitaciones(habitaciones) {this.habitaciones = habitaciones};
    setPlantas(plantas) {this.plantas = plantas};
    setSuperficie(superficie) {this.superficie = superficie};
    //metodos
    calcularManteniment() {
        let trabajadores = Number(Math.ceil(this.habitaciones / 20));
        let sueldos = Number(trabajadores * 1500);
        return `Este hotel necesita ${trabajadores} trabajadores en el personal de limpieza. El sueldo total ascenderá a ${sueldos} €`
    }
    toString() {
        return (
            "HOTEL " + this.nombre + ":\n" + 
            "Número de habitaciones: " + this.habitaciones + "\n" + 
            "Número de plantas: " + this.plantas + "\n" + 
            "Superfície (m2): " + this.superficie)
    }
}
let uno = new Hoteles("HILTON", "300", "6", "5000");
let dos = new Hoteles("MELIA", "600", "25", "3600");
let tres = new Hoteles("NH", "400", "12", "1900");
let cuatro = new Hoteles("PRINCESS", "200", "10", "3600");
arrayHoteles.push(uno, dos, tres, cuatro);
