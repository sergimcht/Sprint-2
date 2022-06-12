const arrayClientes = [];
class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.cuentas = [];
    }
    //getters
    getNombre() {return this.nombre};
    getApellidos() {return this.apellidos};
    getDni() {return this.dni};
    getCuentas() {return this.cuentas};
    //setters
    setNombre(nombre) {this.nombre = nombre};
    setApellidos(apellidos) {this.apellidos = apellidos};
    setDni(dni) {this.dni = dni};
    setCuentas(cuentas) {this.cuentas = cuentas};
    //metodos
    crearCuenta(nCuenta, saldo) {
        let newCuenta = new Cuenta(nCuenta, saldo);
        this.cuentas.push(newCuenta);
        return newCuenta;
    }
}