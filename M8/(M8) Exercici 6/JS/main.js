//funciones validar
function validarNumeroPrompt(valor) {
    if(/\d/.test(valor)) {
        return true;
    } else {
        return false;
    } 
}
//funciones con .find en Escuderia
function checkEscuderia(nombreEscuderia) {
    busquedaEscuderia = arrayEscuderias.find(busquedaEscuderia => busquedaEscuderia.nombre == nombreEscuderia);
    if (busquedaEscuderia != undefined) {
        return true;
    } else {
        return false;
    }
}
function findEscuderia(nombreEscuderia) {
    return (arrayEscuderias.find(escuderia => escuderia.nombre == nombreEscuderia));
}
//funciones crearTipo
function crearEdificio(tipo) {////////////////////////////////////////////////////////
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
}///////////////////////////////////////////////////////////////////////////////////////////////////////
function crearEscuderia() {
    let newNombre = prompt(`Introduce el nombre de la nueva escudería:`, "").toUpperCase();
    let newPresupuesto = prompt(`Introduce el presupuesto de la nueva escudería:`, "en Millones");
    let newPais = prompt(`Introduce el país de origen de la nueva escudería:`, "");
    arrayEscuderias.push(new Escuderia (newNombre, newPresupuesto, newPais));
}
function crearBolido(nombreEscuderia) {
    let escuderia = arrayEscuderias.find(escuderia => escuderia.nombre == nombreEscuderia);
    let newPotencia = prompt(`Introduce la potencia del nuevo coche:`, "En CV");
    let newVeocidad = prompt(`Introduce la velocidad de la nueva escudería:`, "En KM/H");
    let newColor = prompt(`Introduce el color del nuevo coche:`, "");
    let newPrecio = prompt(`Introduce el valor de mercado del nuevo coche:`, "En Millones");
    escuderia.anadirCoche(newPotencia, newVeocidad, newColor, newPrecio);
}
function crearPiloto(nombreEscuderia) {
    let escuderia = arrayEscuderias.find(escuderia => escuderia.nombre == nombreEscuderia)
    let newNombre = prompt(`Introduce el nombre del nuevo piloto:`, "");
    let newApellido = prompt(`Introduce el apellido del nuevo piloto:`, "");
    let newEdad = prompt(`Introduce el edad del nuevo piloto:`, "");
    let newAntiguedad = prompt(`Introduce el antigüedad del nuevo piloto:`, "En años");
    let newAltura = prompt(`Introduce el altura del nuevo piloto:`, "En cms");
    let newPeso = prompt(`Introduce el peso del nuevo piloto:`, "En kg");
    escuderia.anadirPiloto(newNombre, newApellido, newEdad, newAntiguedad, newAltura, newPeso);
}
function crearMecanico(nombreEscuderia) {
    let escuderia = arrayEscuderias.find(escuderia => escuderia.nombre == nombreEscuderia);
    let newNombre = prompt(`Introduce el nombre del nuevo mecánico:`, "");
    let newApellido = prompt(`Introduce el apellido del nuevo mecánico:`, "");
    let newEdad = prompt(`Introduce el edad del nuevo mecánico:`, "");
    let newAntiguedad = prompt(`Introduce el antigüedad del nuevo mecánico:`, "En años");
    let newEstudios = prompt(`Introduce si el nuevo mecánico tiene un nivel de estudios superior:`, "Tiene/No tiene");
    escuderia.anadirMecanico(newNombre, newApellido, newEdad, newAntiguedad, newEstudios);
}
//funciones onClick
function elegirEscuderia(num) {
    let nombreEscuderia = prompt("¿Dentro de qué escudería va a estar?", "")
    switch (num)  {    
        case 1:
            crearBolido(nombreEscuderia); break;
        case 2:
            crearPiloto(nombreEscuderia); break;
        case 3:
            crearMecanico(nombreEscuderia); break;
        default: alert("Selecciona una opción"); break;
    }
}
function insertarElemento() {
    let tipo = document.getElementById("tipoElemento").value;
    switch (tipo) {
        case "escuderia":
            crearEscuderia(); break;
        case "bolido":
            elegirEscuderia(1); break;
        case "piloto":
            elegirEscuderia(2); break;
        case "mecanico":
            elegirEscuderia(3); break;
        default: alert("Selecciona una opción"); break;
    }
}
function mostrarEscuderia() {
    let verEscuderia = (document.getElementById("nombreElemento").value).toUpperCase();
    if (checkEscuderia(verEscuderia) == true) {
        alert(findEscuderia(verEscuderia).toString());
    } else {
        alert(`No se encuentra la escudería ${verEscuderia}.`)
    }
}
function eliminarElemento() {
    let nombre = (document.getElementById("nombreElemento").value.toUpperCase());
    if (checkEscuderia(nombre) != undefined) {
        let indiceBuscado = arrayEscuderias.indexOf(findEscuderia(nombre));
        if (confirm(`¿Seguro que deseas eliminar la escudería ${nombre}?`) == true) {
            arrayEscuderias.splice(indiceBuscado, 1);
            alert(`Se ha eliminado la escudería ${nombre} con éxito.`)
        } else {
            alert("Cambios no guardados.")
        }
    } else {
        alert(`No se encuentra la escudería ${nombre}.`)
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
        document.getElementById("nombreElemento").style.display = "none"; 
        document.getElementById("nombreElemento").value = "";
        document.getElementById("tipoElemento").style.display = "inline"; 
        document.getElementById("tipoElemento").value = "Tipo"; 
        break;
        case 2:
        document.getElementById("b21").style.display = "none"; 
        document.getElementById("b22").style.display = "inline"; 
        document.getElementById("b23").style.display = "none"; 
        document.getElementById("nombreElemento").style.display = "inline"; 
        document.getElementById("nombreElemento").value = ""; 
        document.getElementById("tipoElemento").style.display = "none"; 
        document.getElementById("tipoElemento").value = "";
        break;
        case 3:
        document.getElementById("b21").style.display = "none"; 
        document.getElementById("b22").style.display = "none"; 
        document.getElementById("b23").style.display = "inline"; 
        document.getElementById("nombreElemento").style.display = "inline"; 
        document.getElementById("nombreElemento").value = ""; 
        document.getElementById("tipoElemento").style.display = "none"; 
        document.getElementById("tipoElemento").value = "";
        break;
    }
}
window.onload = function crear () {
    let ferrari = new Escuderia ("FERRARI", 500, "Italia")
    arrayEscuderias.push(ferrari)
    ferrari.anadirCoche(400, 495, "rojo oscuro", 1)
    ferrari.anadirCoche(200, 315, "rojo claro", 0.8)
    ferrari.anadirPiloto("Kimi", "Raikkonen", "42", "5", "172", "65")
    ferrari.anadirPiloto("Pedro", "de la Rosa", "56", "12", "179", "81")
    ferrari.anadirMecanico("Jose", "Gimenez", "66", "22", "Tiene")
    ferrari.anadirMecanico("Lorenzo", "Trumpet", "36", "2", "No tiene")
    //console.log(ferrari)
    //console.log(ferrari.toString())

    let prueba = new Escuderia ("A", 1, "a")
    arrayEscuderias.push(prueba)
    prueba.anadirCoche(2, 2, "b", 2)
    prueba.anadirPiloto("c", "c", "3", "3", "3", "3")
    prueba.anadirMecanico("d", "d", "4", "4", "Tiene")
    //console.log(prueba)
    //console.log(prueba.toString())
}