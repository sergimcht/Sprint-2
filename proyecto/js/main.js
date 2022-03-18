function f11() {
    const array1 = [];
    const array2 = [];
    let i;

    for (i=100;i>=5;i-=5) {
        array1.push(i)
        if ((i % 3) == 0) {
            array2.push(i);
        }
    }
    array1.toString();
    const array22 = [];
    for (i=(array2.length-1);i>=0;i--) {
        array22.push(array2[i]);  
    }
    document.getElementById("array1").innerHTML=array1.toString();
    document.getElementById("array2").innerHTML=array22.toString();
}
function f21() {
    let persona = treballadors.find(persona => persona.nom + persona.cognom === "Pep" + "Vila");
    document.getElementById("nom1").innerHTML = persona.nom;
    document.getElementById("cognoms1").innerHTML = persona.cognom;
    document.getElementById("carrec1").innerHTML = persona.carrec;
    document.getElementById("trasllat1").innerHTML = persona.disponibilitatTrasllat;
}
function f22() {
    let trasllats = treballadors.filter(trasllats => trasllats.disponibilitatTrasllat === true);
    console.log(trasllats);
}
function f23() {
    let newTreballador = new Treballador("Josep Lluis", "Llopis", "administratiu(a)", false);
    arrayTreballadors.push(newTreballador);

    document.getElementById("nom2").innerHTML = newTreballador.nom;
    document.getElementById("cognoms2").innerHTML = newTreballador.cognom;
    document.getElementById("carrec2").innerHTML = newTreballador.carrec;
    document.getElementById("trasllat2").innerHTML = newTreballador.disponibilitatTrasllat;
}