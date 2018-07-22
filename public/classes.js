class User {
  constructor(pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, prol, pbirthDate, pphone, pphoto) {
    this.firstName = pfirstname;
    this.secondName = psecondname;
    this.firstSurname = pfirstsurname;
    this.secondSurname = psecondsurname;
    this.id = pid;
    this.email = pemail;
    this.password = ppassword;
    this.rol = prol;
    this.birthDate = pbirthDate;
    this.phone = pphone;
    this.photo = pphoto;

  }

  //- Gets clases en la cual returna los datos y los mmuestra en el front end, son como los hijos de ls registros cada uno se llaman metodos 
  getFullName() {
    return `${this.firstName} ${this.secondName} ${this.firstSurname} ${this.secondSurname}`;
  }
  getFirstName() {
    return this.firstName;
  }
  getBirthDate() {
    return this.birthDate;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getId() {
    return this.id;
  }

  getPhoto() {
    return this.photo;
  
  }
  getRol() {
    return this.rol;
  }

  //- Sets es para editar datos en los metodos para sobreescribir datos ya dentro de la aplicacion 

  setFirstName(pnewfirstname) {
    this.firstName = pnewfirstname;
  }

  setSecondName(pnewsecondname) {
    this.secondName = pnewsecondname;
  }

  setFirstSurname(pnewfirstsurname) {
    this.firstSurname = pnewfirstsurname;
  }

  setSecondSurname(pnewsecondsurname) {
    this.secondSurname = pnewsecondsurname;
  }

  setBirthDate(pnewBirthDate){
    this.birthDate = pnewBirthDate;
  }

  setEmail(pnewEmail) {
    this.email = pnewEmail;
  }

  setPassword(pnewPassword) {
    this.password = pnewPassword;
  }
  
  setPhoto(pnewphoto) {
    this.photo = pnewphoto;
  }

}

class Admin extends User {
  constructor(pfistname, psecondname, pfirstsurmane, psecondsurname, pid, pemail, ppassword, prol) {
    //la herencia para istanciar los atributos del padre eso signica super
    super(pfistname, psecondname, pfirstsurmane, psecondsurname, pid, pemail, ppassword, prol);
  }
}

class Car{
  constructor(pmarca,pmodelo, pmatricula,pphoto,pcaracteristicas){
    this.marca = pmarca;
    this.modelo = pmodelo;
    this.matricula = pmatricula;
    this.photo = pphoto;
    this.caracteristicas = pcaracteristicas;
  }

  agregarReparaciones(pnuevaReparacion){
    this.reparaciones.push(pnuevaReparacion);
  }

  getReparaciones(){
    return this.reparaciones;
  }

  getmatricula(){
    return this.matricula;
  }

  getInfoVehiculo(){
    return `${this.marca} ${this.modelo}`;
  }

  getPhoto() {
    return this.photo;
  }

  getCaracteristicas() {
    return this.caracteristicas;
  }
}

class Reparaciones{
  constructor(pcosto, pdescripcion){
    this.costo = pcosto;
    this.descripcion = pdescripcion;
  }
}


