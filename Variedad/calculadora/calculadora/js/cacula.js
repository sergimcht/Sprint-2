let simbolo;

function suma(operando1, operando2) {
   return operando1 + operando2;
}

function resta(operando1, operando2) {
   return operando1 - operando2;
}

function multiplica(operando1, operando2) {
   return operando1 * operando2;
}

function divide(operando1, operando2) {
   if (operando2 === 0) {
      alert("ERROR: No se puede dividir por 0");
      return 0;
   } else {
      return operando1 / operando2;
   }
}

function resto(operando1, operando2) {
   if (operando2 === 0) {
      alert("ERROR: No se puede dividir por 0");
      return 0;
   } else {
      return operando1 % operando2;
   }
}

function calcular(){
   let operando1 = Number(document.getElementById('numero1').innerHTML);
   let operando2 = Number(document.getElementById('numero2').innerHTML);
   let operador = document.getElementById('operador').innerHTML
   let resultado = 0;
      

   switch (operador) {
      case "+": resultado = suma(operando1, operando2); break;
      case "-": resultado = resta(operando1, operando2); break;
      case "*": resultado = multiplica(operando1, operando2); break;
      case "/": resultado = divide(operando1, operando2); break;
      case "%": resultado = resto(operando1, operando2); break;
   }
   document.getElementById('resultado').innerHTML=resultado;
   document.getElementById('bc').disabled = true;
   document.getElementById('btnCE').disabled = true;
} 

function llenaValores(numero){
   let valor;
   simbolo = document.getElementById('operador').innerHTML;
   //alert(simbolo);
   if (simbolo==""){
      valor = document.getElementById('numero1').innerHTML; 
      valor += numero;
      valor = Number(valor);
      document.getElementById('numero1').innerHTML = valor;
   } else {
      valor = document.getElementById('numero2').innerHTML;
      valor += numero;
      valor = Number(valor);
      document.getElementById('numero2').innerHTML = valor;
      document.getElementById('bc').disabled = false;
   } 
}

function operacion(simbol) {
   simbolo = simbol;
   document.getElementById('operador').innerHTML = simbolo;
}

function puntoDecimal() {

   let operando, valor, agregarPunto, contenido;
   contenido = document.getElementById('operador').innerHTML;
   if (contenido == "") {
      valor = document.getElementById('numero1').innerHTML;
      operando = 1;
   } else {
      valor = document.getElementById('numero2').innerHTML;
      operando = 2;
   }
   agregarPunto = valor.includes(".");
   console.log(valor, operando);
   
   if (!agregarPunto){
      valor = (valor == "") ? "0." : valor += ".";
      if (operando == 1) {
         document.getElementById('numero1').innerHTML = valor;
      } else {
         document.getElementById('numero2').innerHTML = valor;
      }
   }

}

function reiniciar() {
   document.getElementById('numero1').innerHTML ='';
   document.getElementById('numero2').innerHTML ='';
   document.getElementById('operador').innerHTML ='';
   document.getElementById('resultado').innerHTML ='';
   document.getElementById('bc').disabled = true;
   document.getElementById('btnCE').disabled = false ;
}

function borrarUltimo() {
   if (simbolo == "") {
      document.getElementById('numero1').innerHTML ='';
      document.getElementById('bc').disabled = true;
   } else {
      document.getElementById('numero2').innerHTML ='';
      document.getElementById('bc').disabled = true;
   }
}