arrayOrdenadores = [];
class Ordenadores {
    constructor(marca, modelo, procesador, ram, memoria) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = ram;
        this.memoria = memoria;
    }
    //getters
    getMarca() {return this.marca};
    getModelo() {return this.modelo};
    getProcesador() {return this.procesador};
    getRam() {return this.ram};
    getMemoria() {return this.memoria};
    //setters
    setProcesador(procesador) {this.procesador = procesador};
    setRam(ram) {this.ram = ram};
    setMemoria(memoria) {this.memoria = memoria};
    //metodos
    comprobarPrograma(programa) {
        return "En estos momentos se está ejecutando: " + programa;
    }
    toString(numPc) {
        return ("ORDENADOR " + numPc + ":\n" +
            "Marca: " + this.marca + ".\n" + 
            "Modelo: " + this.modelo + ".\n" + 
            "Procesador: " + this.procesador + ".\n" + 
            "Ram: " + this.ram + ".\n" + 
            "Memoria: " + this.memoria + ".")
    }
}