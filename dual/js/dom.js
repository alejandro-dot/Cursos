
var cajas = document.getElementsByTagName('div');

//----Metodo mas utilizado
var cajauno= document.getElementById('cajauno');

//primeraCaja.textContent = 'Hola mundo';
//primeraCaja.innerHTML = '<u>Hola Mundo</u>';



//----Creando Nodos
//1.- crear el elemento
var caja = document.createElement('div');
//2.- crear un nodo de texto
var contenido = document.createTextNode('HOLA, ESTOY EN JS uwu');
//3.-Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4.- Agregar atribuo a la caja
caja.setAttribute('class', 'caja negro');

//5.-Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//---modificando la clase o ID de un elelmento :o
caja.id ='primera ';
caja.className = 'caja negro';

//conociendo el elemento padre

var padre = cajas[0].parentNode;

padre.insertBefore(caja, cajauno);


//remplazar cajas
//padre.replaceChild(caja, cajas[2]);


//ELIMINAAAAR

//padre.removeChild(cajas[3]);



// EVENTO DEL BOTÓN

//llamando al BOTÓN
var saludar= document.getElementById('saludar');
saludar.addEventListener('click',saludo );

//función para el botón
function saludo() {
alert('HOLAA SOY UN BOTÓN DEL JS');
 }
