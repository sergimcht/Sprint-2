function findDni(buscarDni) {
    let buscarCuenta = arrayClientes.find(buscarCuenta => buscarCuenta.dni == buscarDni);
    return buscarCuenta;
}
function findCuenta(numeroCuenta) {
    let searchCuenta = arrayCuentas.find(searchCuenta => searchCuenta.nCuenta == numeroCuenta);
    return searchCuenta;
}
function crearCliente() {
    let nombre = prompt("Introduce el nombre del nuevo cliente", "");
    let apellidos = prompt("Introduce los apellidos del nuevo cliente", "");
    let dni = prompt("Introduce el DNI del nuevo cliente", "");
    if (findDni(dni) != undefined) {
        alert(`Ya existe una cuenta asociada al DNI ${dni}. Propietario: ${nombre} ${apellidos}`);
    } else {
        let newCustomer = new Cliente(nombre, apellidos, dni);
        arrayClientes.push(newCustomer);
        alert(`Se ha creado un nuevo perfil de cliente para ${nombre} ${apellidos}`)
    }
}
function eliminarCliente() {
    let deleteDni = prompt("Introduce el DNI del cliente a eliminar", "");
    let nombreCliente = (findDni(deleteDni).nombre + " " + findDni(deleteDni).apellidos);
    if (findDni(deleteDni) != undefined) {
        if (confirm(`¿Seguro que deseas eliminar el perfil de cliente de ${nombreCliente} con DNI ${deleteDni}?`) == true) {
            let posicion = arrayClientes.indexOf(findDni(deleteDni))
            if (arrayClientes[posicion].cuentas != 0) {
                let saldoTotal = "";
                for (i=0; i<(arrayClientes[posicion].cuentas.length); i++) {
                    saldoTotal += (arrayClientes[posicion].cuentas[i]).getSaldo();
                }
                alert(`Se ha procedido a eliminar todas las cuentas asociadas. Se realiza un abono de ${saldoTotal}€ en efectivo por dicha cancelación`);
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
}
function crearCuenta() {
    let nCuenta = "ES981234558921" + Math.trunc((Math.random() * (9999999999 - 1000000000) + 1000000000)); // bucle para que no se repita??
    let dniCliente = prompt("Introduce el DNI del cliente al que se le va a abrir una nueva cuenta", "");
    let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
    if (findDni(dniCliente) != undefined) {
        if (confirm(`Seguro que deseas crear una nueva cuenta a ${nombreCliente}?`) == true) {
            findDni(dniCliente).crearCuenta(nCuenta);
            alert(`Se ha creado la cuenta ${nCuenta} para ${nombreCliente}`)
        } else {
            alert("Cambios no realizados");
        }
    } else {
        alert(`No hay ninguna cuenta asociada al DNI ${dniCliente}`)
    }
}
function eliminarCuenta() {
    let dniCliente = prompt("Introduce tu DNI para poder cancelar una cuenta", "");
    if (findDni(dniCliente) != undefined) {
        let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
        let cuenta = prompt(`¡Hola ${nombreCliente}, bienvenido! Elige la cuenta que quieres cancelar`);
        let posicion = arrayClientes.indexOf(findDni(dniCliente))
        if (arrayClientes[posicion].cuentas.find(cuentacliente => cuentacliente.nCuenta == cuenta) != undefined) {
            let posicion2 = arrayClientes[posicion].cuentas.indexOf(findCuenta(cuenta))
            if (findCuenta(cuenta).getSaldo() > 0 ) {
                alert(`${nombreCliente}, se ha cancelado tu cuenta ${cuenta} y se te abona en efectivo ${findCuenta(cuenta).getSaldo()}€`);
                arrayClientes[posicion].cuentas.splice(posicion2, 1)
            } else {
                alert(`${nombreCliente}, se ha cancelado tu cuenta ${cuenta}`);
                arrayClientes[posicion].cuentas.splice(posicion2, 1)
            }
        } else {
            alert(`${nombreCliente}, no tienes ninguna cuenta con el código ${cuenta}`);
        }
    } else {
        alert(`No hay ningun cliente asociado al DNI ${dniCliente}`);
    }
}
function ingresarDinero() {
    let dniCliente = prompt("Introduce el DNI del cliente al que se le va a realizar un ingreso", "");
    if (findDni(dniCliente) != undefined) {
        let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
        let cuenta = prompt(`¿A qué cuenta de ${nombreCliente} se le va a hacer el ingreso?`);
        let posicion = arrayClientes.indexOf(findDni(dniCliente))
        if (arrayClientes[posicion].cuentas.find(cuentacliente => cuentacliente.nCuenta == cuenta) != undefined) {
            let ingreso = Number(prompt("¿De qué cantidad en Euros (€) va a ser el ingreso?", ""));
            findCuenta(cuenta).ingresar(ingreso);
            alert(`Se ha realizado un ingreso de ${ingreso}€.\nEl nuevo saldo de la cuenta ${cuenta} perteneciente a ${nombreCliente} es de ${findCuenta(cuenta).getSaldo()}€`);
        } else {
            alert(`${nombreCliente} no tiene ninguna cuenta con el código ${cuenta}`)
        }
    } else {
        alert(`No hay ningun cliente asociado al DNI ${dniCliente}`)
    }
}
function retirarDinero() {
    let dniCliente = prompt("Introduce tu DNI para poder realizar un retiro de efectivo", "");
    if (findDni(dniCliente) != undefined) {
        let nombreCliente = (findDni(dniCliente).nombre + " " + findDni(dniCliente).apellidos);
        let cuenta = prompt(`¡Hola ${nombreCliente}, bienvenido! Elige la cuenta para retirar dinero`);
        let posicion = arrayClientes.indexOf(findDni(dniCliente))
        if (arrayClientes[posicion].cuentas.find(cuentacliente => cuentacliente.nCuenta == cuenta) != undefined) {
            let retiro = Number(prompt("¿De qué cantidad en Euros (€) va a ser el retiro?", ""));
            if ((findCuenta(cuenta).getSaldo() - retiro) < 0 ) {
                alert(`${nombreCliente}, no tienes saldo suficiente en esta cuenta`)
            } else {
                findCuenta(cuenta).retirar(retiro);
                alert(`Se ha realizado un retiro de ${retiro}€.\n${nombreCliente}, el nuevo saldo de tu cuenta ${cuenta} es de ${findCuenta(cuenta).getSaldo()}€`);
            }
        } else {
            alert(`${nombreCliente}, no tienes ninguna cuenta con el código ${cuenta}`)
        }
    } else {
        alert(`No hay ningun cliente asociado al DNI ${dniCliente}`)
    }
}
function verCuentas() {
    let dniCliente = prompt("Introduce tu DNI para poder ver tus cuentas", "");
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
}

window.onload = baseDatos();
function baseDatos() { // BBDD pre-cargada
    let prueba  = new Cliente('a', 'a', '0');
    let pablo = new Cliente('Pablo', 'Diaz', '48526368T');
    let jose = new Cliente('José', 'Ruiz', '48955652J');
    prueba.crearCuenta('0')
    prueba.crearCuenta('1')
    pablo.crearCuenta('ES9812345589211258444232')
    jose.crearCuenta('ES9812345589211258985632');
    jose.crearCuenta('ES9812345589211258874566');
    arrayClientes.push(pablo, jose, prueba);
}

function salir() {
    console.log('array clientes', arrayClientes, 'array cuentas', arrayCuentas)
    /*document.getElementById("enunciado").style.display = "none"
    document.getElementById("crearHotel").style.display = "none"
    document.getElementById("eliminarHotel").style.display = "none"
    document.getElementById("verHotel").style.display = "none"
    document.getElementById("modificarHotel1").style.display = "none"
    document.getElementById("modificarHotel2").style.display = "none"
    document.getElementById("botonesMenu").style.display = "none"*/

}