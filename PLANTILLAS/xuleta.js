
XULETA

CONSOLE
console.table(arrayObjectes);
console.log(variables);

ORDRES SENSE VARIABLE
//afegir un objecte al principi de l'array
arrayobjectes.unshift(nomobjecte);

//afegir un objecte al final de l'array
arrayobjectes.push(nomobjecte);

//inserció d'un objecte a una posició concreta (els índex es reordenen)
arrayobjectes.splice(#posició inici inserció, 0, nounomobjecte a inserir); 

//substitució d'un objecte en una posició concreta
arrayobjectes.splice(#posició substituir, 1, nounomobjecte a substituir);

//esborrar un objecte en una posició concreta
arrayobjectes.splice(#posició a esborrar, 1); 

//esborrar el primer element (NO estic segur si val PER OBJECTES) de l'array
arrayobjectes.shift(nomobjecte);

//esborrar l'últim element (NO estic segur si val PER OBJECTES) de l'array
arrayobjectes.pop(nomobjecte);


ORDRES AMB VARIABLE
//índex d'un objecte
let index = arrayobjectes.indexOf(nomobjecte);
retorna un índex

//recerca d'un índex d'un objecte pel valor d'un atribut
let index = arrayobjectes.findIndex(element => element.atribut == valor atribut);
retorna un índex

//recerca d'un sol objecte pel valor d'un atribut
let objecte = arrayobjectes.find(element => element.atribut === valor atribut); 
retorna un objecte

//recerca de tots objecte pel valor d'un atribut
let arrayobjectesnou = arrayobjectes.filter(element => element.atribut === valor atribut);
retorna un arrayobjectes

//ordena una array per ordre alfabètic per un valor d'atribut
let array = arrayobjectesnou = arrayobjectes.sort(element => element.atribut === valor atribut);
retorna un arrayobjectes

//consulta de si ALGUN objcete té el valor de l'atribut
let boolea = arrayobjectes.some(element => element.numCompte === valor atribut);
retorna un boolea

//consulta de si TOTS els objcetes tenen el valor de l'atribut
let boolea = arrayobjectes.every(element => element.numCompte === valor atribut);
retorna un boolea

//mètodes map() i forEach() encara No controlo


LOOPS DE RECERCA
//Per recórrer COMPLERT un array 2 ficat dins d'un array 1, concatenat a una variable i treure una llista
//FOR a llista
    let i, j;
    for (i=0; i<array1.length; i++) {

        for(j=0; j<array1[i].array2.length; j++){

            llista2 += . . . . 
        }

//Per recórrer PER BUSCAR UN ELEMENT en un array 2 ficat dins d'un array 1, concatenat a una variable
//FOR a llista (recorre tot l'array)
    let i, j;
    for (i=0; i<array1.length; i++) {
            
        for (j=0; j<array1[i].array2.length; j++) {
            
            if (valor atribut == array1[i].array2[j].atribut){

            resultat += . . . . 
            }
        }
    }

//Per recórrer PER BUSCAR UN ELEMENT en un array 2 ficat dins d'un array 1, concatenat a una variable
//WHILE a llista (es para quan ho troba)
    let i=0; let j; 
    while (i<array1.length) {
    j=0;    
        while (j<array1[i].array2.length) {
            
            if (valor atribut == array1[i].array2[j].atribut){

            resultat += . . . . 
            }
        j++;
        }
    i++;    
    }


ESTRUCTURA DE CLASSES
//Classe amb getters, setters, mètodes i toString(). Si hi ha un array a un atribut de la classe NO es posa al constructor).

//Classes principals = constructor + getter + setter + mètodes + toString()
//Classes secundàries = constructor + mètodes + toString()

class Nomclasse {

    constructor (atribut1, atribut2, ...) {
        this.atribut1 = atribut1;
        this.atribut2 = atribut2;
        ...
        this.atribut = [];
    }

    //Getters
    getAtribut() { return this.atribut; } //al programa es crida objecte.getAtribut()
    get getAtribut() { return this.atribut; } //al programa es crida objecte.getAtribut

    //setters
    setAtribut(atribut) { this.atribut = atribut; } //al programa es crida objecte.setAtribut()

    //mpetodes normals
    metode(parametre) { //sense 'function'

        let .... ;
        ........ ;

        return valor;
    }

    //mètode to String() (descripció de l'objecte en una llista). Es crida al programa: objecte.toString() o només amb el nom de l'objecte
    toString() {

        let llista += .... ;

        return llista;
    }
}

//Per crear objectes nous a partir d'una classe fora de l'array
let objectenou = new Nomclasse (atribut1, atribut2, ...);

//o bé
const arrayobjectes = [];

arrayobjectes[i] = new Nomclasse (atribut1, atribut2, ...);
...;

//Per crear objectes a partir de la classe dins del propi array d'objcetes
const arrayobjectes = [

    new Nomclasse (atribut1, atribut2, ...);
    ... ;
];
