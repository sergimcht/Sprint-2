const arrayAgenda = [];
class Agenda {
   constructor(categoria) {
      this.categoria = categoria;
      this.contactos = [];
   }
   crearContacto(contacto, numeroTelefono, web) {
      let newcontacto = new Contacto(contacto, numeroTelefono, web);
      this.contactos.push(newcontacto);
      return newcontacto;
   }
}