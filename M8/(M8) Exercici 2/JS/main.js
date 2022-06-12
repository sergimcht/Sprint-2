function findHotel(hotel) {
    let hotelFound = arrayHoteles.find(hotelFound=> hotelFound.nombre == hotel);
    return hotelFound;
}
function checkHotel(num) {
    let hotel = document.getElementById("nombreHotel" + num).value;
    let newHotel = hotel.toUpperCase();
    if (findHotel(newHotel) != undefined) {
        alert(`El nombre ${hotel} ya existe, elige otro`);
    } else {
        alert(`El nombre ${hotel} no está en la base de datos, puedes proceder`);
    }
}
function crearHotel() {
    let nombre = document.getElementById("nombreHotel1").value;
    let newNombre = nombre.toUpperCase();
    let newHab = Number(document.getElementById("habHotel1").value);
    let newPlantas = Number(document.getElementById("plantasHotel1").value);
    let newM2 = Number(document.getElementById("m2Hotel1").value);
    let newHotel = new Hoteles(newNombre, newHab, newPlantas, newM2);
    
    if (findHotel(newNombre) != undefined) {
        alert("Ese nombre ya existe, elige otro")
    } else {
        arrayHoteles.push(newHotel);
        alert(`El hotel ${nombre} se ha creado con éxito`)
    }
}
function donarDeBaixaHotel() {
    let nombre = document.getElementById("nombreHotel2").value;
    let newNombre = nombre.toUpperCase();
    if (findHotel(newNombre) != undefined) {
        if (confirm(`Seguro que deseas eliminar el hotel ${nombre}?`) == true) {
            let posicion = arrayHoteles.indexOf(findHotel(newNombre))
            arrayHoteles.splice(posicion, 1)
            alert(`El hotel ${nombre} se ha eliminado con éxito`)
        } else {
        alert("Vale!");
        }
    } else {
        alert(`El hotel ${nombre} no se encuentra, prueba con otro`)
    }
    }
function veureHotel() {
    let nombre = document.getElementById("nombreHotel3").value;
    let newNombre = nombre.toUpperCase();
    if (findHotel(newNombre) != undefined) {
        alert(findHotel(newNombre).toString() + "\n" + findHotel(newNombre).calcularManteniment());
    } else {
        alert(`El hotel ${nombre} no se encuentra, prueba con otro`)
    }

}
function modificarHotel2() {
    let oldNombre = (document.getElementById("nombreHotel41").value).toUpperCase();
    let newNombre = (document.getElementById("nombreHotel42").value).toUpperCase();
    let newHab = Number(document.getElementById("habHotel4").value);
    let newPlantas = Number(document.getElementById("plantasHotel4").value);
    let newM2 = Number(document.getElementById("m2Hotel4").value);
    //cambios:
    if (findHotel(newNombre) == undefined) {
        if (newNombre != "") {
            findHotel(oldNombre).setNombre(newNombre);
        }
        if (newHab != "") {
            findHotel(oldNombre).setHabitaciones(newHab);
        }
        if (newPlantas != "") {
            findHotel(oldNombre).setPlantas(newPlantas);
        }
        if (newM2 != "") {
            findHotel(oldNombre).setSuperficie(newM2);
        }
        alert("Cambios realizados")
    } else {
        alert("Que ese nombre ya está pillado, coño")
    }
    
}
function modificarHotel1() {
    let nombre = document.getElementById("nombreHotel41").value;
    let newNombre = nombre.toUpperCase();
    if (findHotel(newNombre) != undefined) {
        document.getElementById("modificarHotel2").style.display = "inline";
        document.getElementById("modificarHotel1").style.display = "none"
    } else {
        alert(`El hotel ${nombre} no se encuentra, prueba con otro`)
    }
}
function abrirEnunciado() {
    document.getElementById("enunciado").style.display = "inline"
    document.getElementById("crearHotel").style.display = "none"
    document.getElementById("eliminarHotel").style.display = "none"
    document.getElementById("verHotel").style.display = "none"
    document.getElementById("modificarHotel1").style.display = "none"
    document.getElementById("modificarHotel2").style.display = "none"
}
function abrirRegistrar() {
    document.getElementById("enunciado").style.display = "none"
    document.getElementById("crearHotel").style.display = "inline"
    document.getElementById("eliminarHotel").style.display = "none"
    document.getElementById("verHotel").style.display = "none"
    document.getElementById("modificarHotel1").style.display = "none"
    document.getElementById("modificarHotel2").style.display = "none"
}
function abrirEliminar() {
    document.getElementById("enunciado").style.display = "none"
    document.getElementById("crearHotel").style.display = "none"
    document.getElementById("eliminarHotel").style.display = "inline"
    document.getElementById("verHotel").style.display = "none"
    document.getElementById("modificarHotel1").style.display = "none"
    document.getElementById("modificarHotel2").style.display = "none"
}
function abrirVer() {
    document.getElementById("enunciado").style.display = "none"
    document.getElementById("crearHotel").style.display = "none"
    document.getElementById("eliminarHotel").style.display = "none"
    document.getElementById("verHotel").style.display = "inline"
    document.getElementById("modificarHotel1").style.display = "none"
    document.getElementById("modificarHotel2").style.display = "none"
}
function abrirModificar() {
    document.getElementById("enunciado").style.display = "none"
    document.getElementById("crearHotel").style.display = "none"
    document.getElementById("eliminarHotel").style.display = "none"
    document.getElementById("verHotel").style.display = "none"
    document.getElementById("modificarHotel1").style.display = "inline"
    document.getElementById("modificarHotel2").style.display = "none"
}
function salir() {
    document.getElementById("enunciado").style.display = "none"
    document.getElementById("crearHotel").style.display = "none"
    document.getElementById("eliminarHotel").style.display = "none"
    document.getElementById("verHotel").style.display = "none"
    document.getElementById("modificarHotel1").style.display = "none"
    document.getElementById("modificarHotel2").style.display = "none"
    document.getElementById("botonesMenu").style.display = "none"

}