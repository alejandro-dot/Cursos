
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

//---modificando la clase o ID de un elelmento
caja.id ='dom';
caja.className = 'caja negro';

//contendio del elemento padre
//var padre = cajas[2].parentNode;

//padre.insertBefore(caja, primeracaja);


//----remplazar cajas
//padre.replaceChild(caja, cajas[2]);


//Eliminar nodos

//padre.removeChild(cajas[3]);
