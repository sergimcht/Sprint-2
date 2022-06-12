//funciones validar
function validarDni(dni) { //no va
    if(/\d{8}[A-Z]/.test(dni)) {
        return true;
    } else {
        return false;
    }
}
function validarDinero(cantidad) {
    if(/\d/.test(cantidad)) {
        return true;
    } else {
        return false;
    }
}
//funciones buscar
function findDni(buscarDni) {
    let buscarCuenta = arrayClientes.find(buscarCuenta => buscarCuenta.dni == buscarDni);
    return buscarCuenta;
}
function findCuenta(numeroCuenta, posicion) {
    let searchCuenta = arrayClientes[posicion].cuentas.find(searchCuenta => searchCuenta.nCuenta == numeroCuenta)
    return searchCuenta;
}
//funciones onClick
function crearCliente() {
    let nombre = prompt("Introduce el nombre del nuevo cliente", "");
    let apellidos = prompt("Introduce los apellidos del nuevo cliente", "");
    let dni = (prompt("Introduce el DNI del nuevo cliente", "")).toUpperCase();
    if ((validarDni(dni) == true)) {
        if (findDni(dni) != undefined) {
            alert(`Ya existe una cuenta asociada al DNI ${dni}. Propietario: ${nombre} ${apellidos}`);
        } else {
            let newCustomer = new Cliente(nombre, apellidos, dni);
            arrayClientes.push(newCustomer);
            alert(`Se ha creado un nuevo perfil de cliente para ${nombre} ${apellidos}`)
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
function eliminarCliente() {
    let deleteDni = (prompt("Introduce el DNI del cliente a eliminar", "")).toUpperCase();
    if ((validarDni(deleteDni) == true)) {
        if (findDni(deleteDni) != undefined) {
            let nombreCliente = (findDni(deleteDni).nombre + " " + findDni(deleteDni).apellidos);
            if (confirm(`¿Seguro que deseas eliminar el perfil de cliente de ${nombreCliente} con DNI ${deleteDni}?`) == true) {
                let posicion = arrayClientes.indexOf(findDni(deleteDni))
                if (arrayClientes[posicion].cuentas != 0) {
                    let saldoTotal = "";
                    for (i=0; i<(arrayClientes[posicion].cuentas.length); i++) {
                        saldoTotal += (arrayClientes[posicion].cuentas[i]).getSaldo();
                    }
                    if (saldoTotal > 0) {
                    alert(`Se ha procedido a eliminar todas las cuentas asociadas. Se realiza un abono de ${saldoTotal}€ en efectivo por dicha cancelación`);
                    } else {
                        alert(`Dado que ${nombreCliente} no tiene liquidez en el sistema, no se procede a ningún abono por la cancelación`)
                    }
                } else {
                    alert(`Dado que ${nombreCliente} no tiene ninguna cuenta en el sistema, no se procede a ningún abono por la cancelación`)
                }    
                arrayClientes.splice(posicion, 1)
                alert(`El perfil de cliente de ${nombreCliente} se ha eliminado con éxito`)
            } else {
            alert("Cambios no realizados.");
            }
        } else {
            alert(`No hay ninguna cuenta asociada al DNI ${deleteDni}`)
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
function crearCuenta() {
    let dniCliente = (prompt("Introduce el DNI del cliente al que se le va a abrir una nueva cuenta", "")).toUpperCase();
    if ((validarDni(dniCliente) == true)) {   
        if (findDni(dniCliente) != undefined) {
            let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
            if (confirm(`Seguro que deseas crear una nueva cuenta a ${nombreCliente}?`) == true) {
                let nCuenta = "ES981234558921" + Math.trunc((Math.random() * (9999999999 - 1000000000) + 1000000000));
                findDni(dniCliente).crearCuenta(nCuenta);
                alert(`Se ha creado la cuenta ${nCuenta} para ${nombreCliente}`)
            } else {
                alert("Cambios no realizados");
            }
        } else {
            alert(`No hay ningún cliente asociado al DNI ${dniCliente}`)
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
function eliminarCuenta() {
    let dniCliente = (prompt("Introduce tu DNI para poder cancelar una cuenta", "")).toUpperCase();
    if ((validarDni(dniCliente) == true)) {  
        if (findDni(dniCliente) != undefined) {
            let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
            let cuenta = prompt(`¡Hola ${nombreCliente}, bienvenido! Elige la cuenta que quieres cancelar`);
            let posicion = arrayClientes.indexOf(findDni(dniCliente))
            if (findCuenta(cuenta, posicion) != undefined) {
                if (confirm(`${nombreCliente}, ¿estás seguro de que deseas eliminar tu cuenta ${cuenta}?`) == true) {
                    let posicion2 = arrayClientes[posicion].cuentas.indexOf(findCuenta(cuenta, posicion))
                    if (findCuenta(cuenta, posicion).getSaldo() > 0 ) {
                        alert(`${nombreCliente}, se ha cancelado tu cuenta ${cuenta} y se te abona en efectivo ${findCuenta(cuenta, posicion).getSaldo()}€`);
                        arrayClientes[posicion].cuentas.splice(posicion2, 1)
                    } else {
                        alert(`${nombreCliente}, se ha cancelado tu cuenta ${cuenta}`);
                        arrayClientes[posicion].cuentas.splice(posicion2, 1)
                    }
                } else {
                    alert("Cambios no realizados.");
                }
            } else {
                alert(`${nombreCliente}, no tienes ninguna cuenta con el código ${cuenta}`);
            }
        } else {
            alert(`No hay ningún cliente asociado al DNI ${dniCliente}`);
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
function ingresarDinero() {
    let dniCliente = (prompt("Introduce el DNI del cliente al que se le va a realizar un ingreso", "")).toUpperCase();
    if ((validarDni(dniCliente) == true)) { 
        if (findDni(dniCliente) != undefined) {
            let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
            let cuenta = prompt(`¿A qué cuenta de ${nombreCliente} se le va a hacer el ingreso?`);
            let posicion = arrayClientes.indexOf(findDni(dniCliente))
            if (findCuenta(cuenta, posicion) != undefined) {
                let ingreso = Number(prompt("¿De qué cantidad en Euros (€) va a ser el ingreso?", ""));
                if ((validarDinero(ingreso) == true)) { 
                    findCuenta(cuenta, posicion).ingresar(ingreso);
                    alert(`Se ha realizado un ingreso de ${ingreso}€.\nEl nuevo saldo de la cuenta ${cuenta} perteneciente a ${nombreCliente} es de ${findCuenta(cuenta, posicion).getSaldo()}€`);
                } else {
                    alert("Error en el formao de la cantidad a ingresar")
                }
            } else {
                alert(`${nombreCliente} no tiene ninguna cuenta con el código ${cuenta}`)
            }
        } else {
            alert(`No hay ningun cliente asociado al DNI ${dniCliente}`)
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
function retirarDinero() {
    let dniCliente = (prompt("Introduce tu DNI para poder realizar un retiro de efectivo", "")).toUpperCase();
    if ((validarDni(dniCliente) == true)) {  
        if (findDni(dniCliente) != undefined) {
            let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
            let cuenta = prompt(`¡Hola ${nombreCliente}, bienvenido! Elige la cuenta para retirar dinero`);
            let posicion = arrayClientes.indexOf(findDni(dniCliente))
            if (findCuenta(cuenta, posicion) != undefined) {
                let retiro = Number(prompt("¿De qué cantidad en Euros (€) va a ser el retiro?", ""));
                if ((validarDinero(retiro) == true)) { 
                    if ((findCuenta(cuenta, posicion).getSaldo() - retiro) < 0 ) {
                        alert(`${nombreCliente}, no tienes saldo suficiente en esta cuenta`)
                    } else {
                        findCuenta(cuenta, posicion).retirar(retiro);
                        alert(`Se ha realizado un retiro de ${retiro}€.\n${nombreCliente}, el nuevo saldo de tu cuenta ${cuenta} es de ${findCuenta(cuenta, posicion).getSaldo()}€`);
                    }
                } else {
                    alert("Error en el formao de la cantidad a retirar")
                }
            } else {
                alert(`${nombreCliente}, no tienes ninguna cuenta con el código ${cuenta}`)
            }
        } else {
            alert(`No hay ningun cliente asociado al DNI ${dniCliente}`)
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
function verCuentas() {
    let dniCliente = (prompt("Introduce tu DNI para poder ver tus cuentas", "")).toUpperCase();
    if ((validarDni(dniCliente) == true)) { 
        if (findDni(dniCliente) != undefined) {
            let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
            alert(`¡Hola ${nombreCliente}, bienvenido!`)
            let posicion = arrayClientes.indexOf(findDni(dniCliente))
            if (arrayClientes[posicion].cuentas != 0) {
                let stringCuentas = "";
                for (i=0; i<(arrayClientes[posicion].cuentas.length); i++) {
                    stringCuentas += (arrayClientes[posicion].cuentas[i]).toString();
                }
                alert(stringCuentas);
            } else {
                alert(`${nombreCliente} no tiene ninguna cuenta en el sistema`)
            }
        } else {
            alert(`No hay ningun cliente asociado al DNI ${dniCliente}`)
        }
    } else {
        alert("El DNI debe constar de 8 números y una letra (sin espacios ni simbolos entre medio)")
    }
}
//funcion cargar bbdd
window.onload = baseDatos();
function baseDatos() { // BBDD pre-cargada
    let pablo = new Cliente('Pablo', 'Diaz', '48526368T');
    let jose = new Cliente('José', 'Ruiz', '48955652J');
    pablo.crearCuenta('ES9812345589211258444232')
    jose.crearCuenta('ES9812345589211258985632');
    jose.crearCuenta('ES9812345589211258874566');
    arrayClientes.push(pablo, jose);
}