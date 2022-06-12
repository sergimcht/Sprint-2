let arrayCines = [];
class Cine extends Edificio {
    constructor(nombre, salas, m2, plantas) {
        super (nombre, m2, plantas);
        this.salas = salas;
        this.aforo = ((this.m2 / 1.5) / this.salas);
    }
    //getters
    getSalas() {return this.salas};
    getAforo() {return this.aforo};
    //metodos
    costeVigilar() {
        let numeroVigilantes = Math.ceil(this.m2 / 3000);
        let sueldoMensual = 1300 * numeroVigilantes;
        return `El coste de la vigilancia será de ${sueldoMensual}€ mensuales, ya que se requiere(n) ${numeroVigilantes} vigilante(s).`;
    }
    proyectarSesion() {
        let precioEntrada = prompt("Introduce el precio para esta sesión", "");
        let asistentesSesion = prompt(`¿Cuantos espectadores hay en esta sesión? (el límite es ${this.aforo})`, "")
        if ((/\d/.test(precioEntrada)) && (/\d/.test(asistentesSesion))) {
            if (asistentesSesion <= this.aforo) {
                let ingresosSesion = precioEntrada * asistentesSesion
                return `En la sesión actual se han recaudado ${ingresosSesion} euros.`
            } else {
                return "¡El número de espectadores no puede ser superior al aforo máximo!";
            }
        } else {
            alert("Error en formato. Se esperaba un número. No se pueden calcular los ingresos de la sesión.")
            return "";
        }
    }
    toString() {
        return `El CINE ${this.nombre}, con ${this.m2} m2 y ${this.plantas} plantas de altura, consta actualmente de ${this.salas} salas con un aforo de ${this.aforo} personas cada una.\n${this.costeLimpiar()}\n${this.costeVigilar()}\n${this.proyectarSesion()}`
    }
}