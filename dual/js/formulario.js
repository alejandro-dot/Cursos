//alert('oda');
var formulario= document.getElementById('formulario');
var nombre = formulario.nombre;
 var sexo = formulario.sexo;
 var terminos = formulario.terminos;

function validar(e){
  if(nombre.value>18){
    alert('mucho texto');
    e.preventDefault;

  }
}
formulario.addEventListener('submit', validar);
