//funciones validar
function validarNumeroPrompt(valor) {
    if(/\d/.test(valor)) {
        return true;
    } else {
        return false;
    } 
}
//funciones reconocer
function selectTipo(tipo) {
    switch(tipo) {
        case "hotel": return arrayHoteles;
        case "hospital": return arrayHospitales;
        case "cine": return arrayCines;
        default: alert("Selecciona el tipo de edificio"); break;
    }
}
function checkEdificio(tipo, newNombre) {
    let busquedaEdificio = selectTipo(tipo).find(busquedaEdificio => busquedaEdificio.nombre == newNombre)
    if (busquedaEdificio != undefined) {
        return true;
    } else {
        return false;
    }
}
//funciones crearTipo
function crearHotel(tipo) {
    let newNombre = (prompt(`Introduce el nombre del nuevo ${tipo}.`, "").toUpperCase());
    if (checkEdificio(tipo, newNombre) == false) {
        let m2 = prompt(`Introduce la superficie total en m2.`, "");
        if (/\d/.test(m2)) {
            let newPlantas = prompt(`Introduce el número de plantas.`, "");
            if (/\d/.test(newPlantas)) {
                let newHabitaciones = prompt(`Introduce el número de habitaciones.`, "");
                if (/\d/.test(newHabitaciones)) {
                    arrayHoteles.push(new Hotel (newNombre, m2, newPlantas, newHabitaciones));
                    alert(`¡Se ha creado el nuevo ${tipo} ${newNombre}!`);
                } else {
                    alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
                }
            } else {
                alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
            }
        } else {
            alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
        }
    } else {
        alert(`El nombre ${newNombre} ya está en uso.`)
    }
}
function crearHospital(tipo) {
    let newNombre = (prompt(`Introduce el nombre del nuevo ${tipo}.`, "").toUpperCase());
    if (checkEdificio(tipo, newNombre) == false) {
        let m2 = prompt(`Introduce la superficie total en m2.`, "");
        if (/\d/.test(m2)) {
            let newPlantas = prompt(`Introduce el número de plantas.`, "");
            if (/\d/.test(newPlantas)) {
                let newPacientes = prompt(`Introduce el número de pacientes que hay actualmente.`, "");
                if (/\d/.test(newPacientes)) {
                    arrayHospitales.push(new Hotel (newNombre, m2, newPlantas, newPacientes));
                    alert(`¡Se ha creado el nuevo ${tipo} ${newNombre}!`);
                } else {
                    alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
                }
            } else {
                alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
            }
        } else {
            alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
        }
    } else {
        alert(`El nombre ${newNombre} ya está en uso.`)
    }
}
function crearCine(tipo) {
    let newNombre = (prompt(`Introduce el nombre del nuevo ${tipo}.`, "").toUpperCase());
    if (checkEdificio(tipo, newNombre) == false) {
        let newSalas = prompt(`Introduce el número de salas.`, "");
        if (/\d/.test(newSalas)) {
            let m2 = prompt(`Introduce la superficie total en m2.`, "");
            if (/\d/.test(m2)) {
                let newPlantas = prompt(`Introduce el número de plantas.`, "");
                if (/\d/.test(newPlantas)) {
                    arrayCines.push(new Hotel (newNombre, newSalas, m2, newPlantas));
                    alert(`¡Se ha creado el nuevo ${tipo} ${newNombre}!`);
                } else {
                    alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
                }
            } else {
                alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
            }
        } else {
            alert(`Error en formato. Se esperaba un número. No se ha creado el nuevo ${tipo}.`)
        }
    } else {
        alert(`El nombre ${newNombre} ya está en uso.`)
    }
}
//funciones onClick
function insertarEdificio() {
    let tipo = document.getElementById("tipoEdificio").value;
    switch (tipo) {
        case "hotel":
            crearHotel(tipo)
            break;
        case "hospital":
            crearHospital(tipo)
            break;
        case "cine":
            crearCine(tipo)
            break;
        default: alert("Selecciona el tipo de edificio"); break;
    }
}
function mostrarEdificio() {
    let tipo = document.getElementById("tipoEdificio").value;
    let nombre = (document.getElementById("nombreEdificio").value.toUpperCase());
    let edificioBuscado = selectTipo(tipo).find(edificioBuscado => edificioBuscado.nombre == nombre);
    if (edificioBuscado != undefined) {
        alert(edificioBuscado.toString());
    } else {
        alert(`No se ecuentra el ${tipo} ${nombre}.`)
    }
}
function eliminarEdificio() {
    let tipo = document.getElementById("tipoEdificio").value;
    let nombre = (document.getElementById("nombreEdificio").value.toUpperCase());
    let edificioBuscado = selectTipo(tipo).find(edificioBuscado => edificioBuscado.nombre == nombre);
    if (edificioBuscado != undefined) {
        let indiceBuscado = selectTipo(tipo).indexOf(edificioBuscado);
        if (confirm(`¿Seguro que deseas eliminar el ${tipo} ${edificioBuscado.nombre}?`) == true) {
            selectTipo(tipo).splice(indiceBuscado, 1);
            alert(`Se ha eliminado el ${tipo} ${edificioBuscado.nombre} con éxito.`)
        } else {
            alert("Cambios no guardados.")
        }
    } else {
        alert(`No se encuentra el ${tipo} ${nombre}.`)
    }
}
//mostrar menu
function mostrarBuscador(numeroFuncionalidad) {
    document.getElementById("buscador").style.display = "inline"
    switch (numeroFuncionalidad) {
        case 1: 
        document.getElementById("b21").style.display = "inline"; 
        document.getElementById("b22").style.display = "none"; 
        document.getElementById("b23").style.display = "none"; 
        document.getElementById("nombreEdificio").style.display = "none"; 
        document.getElementById("nombreEdificio").value = ""; 
        break;
        case 2:
        document.getElementById("b21").style.display = "none"; 
        document.getElementById("b22").style.display = "inline"; 
        document.getElementById("b23").style.display = "none"; 
        document.getElementById("nombreEdificio").style.display = "inline"; 
        document.getElementById("nombreEdificio").value = ""; 
        break;
        case 3:
        document.getElementById("b21").style.display = "none"; 
        document.getElementById("b22").style.display = "none"; 
        document.getElementById("b23").style.display = "inline"; 
        document.getElementById("nombreEdificio").style.display = "inline"; 
        document.getElementById("nombreEdificio").value = ""; 
        break;
    }
}
window.onload = function crear () {
    
    arrayHoteles.push(new Hotel ("HILTON", "73858", "22", "583"))
    arrayHoteles.push(new Hotel ("PEPITA", "593", "3", "12"))

    arrayHospitales.push(new Hospital ("DE VILAFRANCA", "1950", "2", "26"))
    arrayHospitales.push(new Hospital ("GENERAL DE CATALUNYA", "25350", "10", "315"))

    arrayCines.push(new Cine ("MONTECARLO", "12", "3180", "1"))
    arrayCines.push(new Cine ("PRINCIPAL", "26", "12450", "2"))
    
}