function anadir() {
    let posicion = (prompt("¿En qué posición quieres añadir la nueva berenjena?", "Para la última posición: " + (fotos.length + 1)) - 1);
    if ((posicion >= 1) && (posicion <= (fotos.length))) {
        let nueva = {
            imagen: prompt("Nombre de la foto en el PC con extensión", ""),
            nombre: prompt("Nombre de la foto", ""),
            title: prompt("Título de la foto", ""),
            descripcion: prompt("Pie de foto", ""),
        };
        
        fotos.splice(posicion, 0, nueva);
        i = posicion;
        mostrar();
    } else {
        alert("La posición debe estar entre el 1 y el " + (fotos.length + 1))
    }
}

function eliminar() {
    let deletear = confirm("¿Estás seguro de que quieres eliminar la berenjena actual?", "");
    if (deletear == true) {
        fotos.splice((i), 1);
        mostrar();
    }
}

function buscar() {
    let nombreInput = prompt("¿Qué berenjena quieres buscar?", "");
    let nombreMinus = nombreInput.toLowerCase();
    let nombreCap = (nombreInput.charAt(0).toUpperCase() + nombreMinus);

    let busqueda = fotos.find(busqueda => busqueda.nombre === nombreCap);

    let indice = fotos.indexOf(busqueda);

    if (indice == (-1)) {
        alert('La berenjena "' + nombreCap + ('" no se ha encontrado.'))
    } else {
        i = indice;
        mostrar();
    }
}

function modificar() {
    let img = fotos[i].imagen;
    img = img.substr(0, img.length - 4);
    let nombreImg = fotos[i].nombre;
    let titulo = fotos[i].title;
    let descr = fotos[i].descripcion;

    img = prompt('Nueva imagen con extensión para "' + fotos[i].nombre + '".');
    if (img == 0) {
        img = fotos[i].imagen
    }
    nombreImg = prompt('Nuevo nombre para "' + fotos[i].nombre + '".');
    if (nombreImg == 0) {
        nombreImg = fotos[i].nombre
    }
    titulo = prompt('Nuevo título para "' + fotos[i].nombre + '".');
    if (titulo == 0) {
        titulo = fotos[i].title
    }
    descr = prompt('Nueva descripción para "' + fotos[i].nombre + '".');
    if (descr == 0) {
        descr = fotos[i].descripcion
    }

    let berenjenaMod = {
        imagen: img,
        nombre: nombreImg,
        title: titulo,
        descripcion: descr
    }

    fotos.splice(i, 1, berenjenaMod);
    mostrar();
}

function salir() {
    let displayFotos = document.getElementById("todo");
    let displayHastaluego = document.getElementById("hastaluego");
    let exit = confirm("¿Estás seguro de que quieres salir? Todos los cambios se verán revertidos.", "");
    if (exit == true) {
        displayFotos.style.display = "none"
        displayHastaluego.style.display = "block"
    }
}
