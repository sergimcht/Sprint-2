class Coche {
    constructor (potencia, velocidad, color, precio) {
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.color = color;
        this.precio = precio;
    }
    toString() {
        return `Bólido con una potencia de ${this.potencia}CV y una velocidad punta de ${this.velocidad}km/h. Valor de mercado: ${this.precio}M€. Color: ${this.color}.`
    }

}