function ej11() {
   console.log(agenda)
}
function ej12() {
   console.log(agenda[0].contactos[3])
}
function ej13() {
   console.log(agenda[1].contactos)
}
//////////////\\\\\\\\\\\\\\
function ej21() {
   let quien = (prompt("De quien quieres mostrar los datos de contacto?", "").toLowerCase());

   switch(quien) {
      case "112": console.log(agenda[0].contactos[0]); break;
      case "policia": console.log(agenda[0].contactos[1]); break;
      case "bomberos": console.log(agenda[0].contactos[2]); break;
      case "sem": console.log(agenda[0].contactos[3]); break;
      case "cruz roja": console.log(agenda[0].contactos[4]); break;
      case "visa": console.log(agenda[1].contactos[0]); break;
      case "american express": console.log(agenda[1].contactos[1]); break;
      case "mastercard": console.log(agenda[1].contactos[2]); break;
   }
}
function ej22() {
   let quien = (prompt("De quien quieres mostrar la página web?", "").toLowerCase());
   switch(quien) {
      case "112": console.log(agenda[0].contactos[0].web); break;
      case "policia": console.log(agenda[0].contactos[1].web); break;
      case "bomberos": console.log(agenda[0].contactos[2].web); break;
      case "sem": console.log(agenda[0].contactos[3].web); break;
      case "cruz roja": console.log(agenda[0].contactos[4].web); break;
      case "visa": console.log(agenda[1].contactos[0].web); break;
      case "american express": console.log(agenda[1].contactos[1].web); break;
      case "mastercard": console.log(agenda[1].contactos[2].web); break;
   }
}
function ej23() {
   let quien = (prompt("De quien quieres mostrar el teléfono y página web?", "").toLowerCase());
   switch(quien) {
      case "112": console.log(agenda[0].contactos[0].numeroTelefono + " " + agenda[0].contactos[0].web); break;
      case "policia": console.log(agenda[0].contactos[1].numeroTelefono + " " + agenda[0].contactos[1].web); break;
      case "bomberos": console.log(agenda[0].contactos[2].numeroTelefono + " " + agenda[0].contactos[2].web); break;
      case "sem": console.log(agenda[0].contactos[3].numeroTelefono + " " + agenda[0].contactos[3].web); break;
      case "cruz roja": console.log(agenda[0].contactos[4].numeroTelefono + " " + agenda[0].contactos[4].web); break;
      case "visa": console.log(agenda[1].contactos[0].numeroTelefono + " " + agenda[1].contactos[0].web); break;
      case "american express": console.log(agenda[1].contactos[1].numeroTelefono + " " + agenda[1].contactos[1].web); break;
      case "mastercard": console.log(agenda[1].contactos[2].numeroTelefono + " " + agenda[1].contactos[2].web); break;
   }
}
//window.onload = creador(); // para que se cree sin tener que pulsar el boton
function creador() {
   let emergencias = new Agenda("Emergencias");
   let tarjetas = new Agenda("Tarjetas de Crédito (cancelación)");
   let taxis = new Agenda("Taxis");
   //emergencias
   let emer112 = emergencias.crearContacto('Emergencias todo tipo', '112', 'http://www.112.es/');
   let policia = emergencias.crearContacto('Policía', '091', 'http://www.policia.es/');
   let bomberos = emergencias.crearContacto('Bomberos', '934027000', 'https://ajuntament.barcelona.cat/bombers/es');
   let sem = emergencias.crearContacto('Emergencias Médicas', '061', 'https://sem.gencat.cat/ca/061-salut-respon/');
   let cruzroja = emergencias.crearContacto('Cruz Roja', '901 222 222', 'http://www.cruzroja.es/portada/');
   //tarjetas
   let visa = tarjetas.crearContacto('Visa', '900 991 124', 'https://www.visa.es/');
   let americanexpress = tarjetas.crearContacto('American Express', '900 814 500', 'https://www.americanexpress.com/es-es/');
   let mastercard = tarjetas.crearContacto('Mastercard', '900 971 231', 'https://www.mastercard.es/es-es.html');
   //taxis
   let municipal = taxis.crearContacto('Taxis Municipals de Barcelona', '902 832 126', 'https://www.taxisbcn.cat/')
   let berenjeno = taxis.crearContacto('Taxis Berenjeno S.L.', '902 845 687', 'https://www.taxisberenjeno.es/')

   arrayAgenda.push(emergencias, tarjetas, taxis);
   
   console.log(arrayAgenda)
}