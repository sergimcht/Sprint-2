class Edificio {
    constructor(nombre, m2, plantas) {
        this.nombre = nombre;
        this.m2 = m2;
        this.plantas = plantas;
    }
    //getters
    getNombre() {return this.nombre};
    getM2() {return this.m2};
    getPlantas() {return this.plantas};
    //metodos
    costeLimpiar() {
        let tiempoLimpieza = (this.m2 / 5); //min en limpiar
        let tiempoEntrePlantas = (this.plantas - 1) * 0.5; //min en subir plantas
        let costeMensual = (tiempoEntrePlantas + tiempoLimpieza) * 30; //coste mensual y tambien tiempo mensual
        return `El coste del servicio de limpieza será de ${costeMensual}€ mensuales.`;
    }
    
}