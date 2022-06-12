function f11() {
   console.log(arrayAgendas)
}
function f12() {
   let SEM = arrayAgendas[0].contactos.find(datosSEM => datosSEM.contacto == 'Emergencias Médicas')
   console.log(SEM)
}
function f13() {
   console.log(arrayAgendas[1])
}
function f21() {
   let categoric = prompt("De que agenda quieres ver los datos?", "Emergencias")
   let contact = prompt("De quien quieres ver los datos de contacto?", "Bomberos")
   let i = arrayAgendas.findIndex(i => i.categoria == categoric)
   let objeto = arrayAgendas[i].contactos.find(objeto => objeto.contacto == contact)
   console.log(objeto.contacto, objeto.numeroTelefono, objeto.web)
}
function f22() {
   let categoric = prompt("De que agenda quieres ver los datos?", "Emergencias")
   let contact = prompt("De quien quieres ver los datos de contacto?", "Cruz Roja")
   let i = arrayAgendas.findIndex(i => i.categoria == categoric)
   let objeto = arrayAgendas[i].contactos.find(objeto => objeto.contacto == contact)
   console.log(objeto.web)
}
function f23() {
   let categoric = prompt("De que agenda quieres ver los datos?", "Tarjetas de Crédito (cancelación)")
   let contact = prompt("De quien quieres ver los datos de contacto?", "Mastercard")
   let i = arrayAgendas.findIndex(i => i.categoria == categoric)
   let objeto = arrayAgendas[i].contactos.find(objeto => objeto.contacto == contact)
   console.log(objeto.numeroTelefono, objeto.web)
}
window.onload = function crearBBDD() {
   arrayAgendas.push(new Agenda("Emergencias"), new Agenda("Tarjetas de Crédito (cancelación)"), new Agenda("Taxis"))
   arrayAgendas[0].crearContacto('Emergencias todo tipo', '112', 'http://www.112.es/');
   arrayAgendas[0].crearContacto('Policía', '091', 'http://www.policia.es/');
   arrayAgendas[0].crearContacto('Bomberos', '934027000', 'https://ajuntament.barcelona.cat/bombers/es');
   arrayAgendas[0].crearContacto('Emergencias Médicas', '061', 'https://sem.gencat.cat/ca/061-salut-respon/');
   arrayAgendas[0].crearContacto('Cruz Roja', '901 222 222', 'http://www.cruzroja.es/portada/');
   arrayAgendas[1].crearContacto('Visa', '900 991 124', 'https://www.visa.es/') 
   arrayAgendas[1].crearContacto('American Express', '900 814 500', 'https://www.americanexpress.com/es-es/')
   arrayAgendas[1].crearContacto('Mastercard', '900 971 231', 'https://www.mastercard.es/es-es.html')
   arrayAgendas[2].crearContacto('Taxis Municipales', '900 952 244', 'https://www.taxismunicipalesbcn.es/')
   arrayAgendas[2].crearContacto('Taxis Generali', '900 778 784', 'https://www.taxisgenerali.es/')
   arrayAgendas[2].crearContacto('Taxis Alberto', '900 123 998', 'https://www.taxisalberto.es/')
}