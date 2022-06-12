class Cuenta {
    constructor(nCuenta) {
        this.nCuenta = nCuenta;
        this.saldo = 0;
    }
    //getters
    getNCuenta() {return this.nCuenta};
    getSaldo() {return this.saldo};
    //metodos
    ingresar(ingreso) {
        this.saldo += ingreso;
        return this.saldo;
    }
    retirar(retiro) {
        this.saldo -= retiro;
        return this.saldo;
    }
    toString() {
        return (`Cuenta número: ${this.nCuenta}\nSaldo disponible: ${this.saldo}\n\n`)
    }
}
