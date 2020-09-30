(function(){
   var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

        function validarNombre(e){
          if(nombre.value == '' || nombre.value == null){
              console.log('Por favor ingresa un nombre');
              error.style.display = 'block';
              error.innerHTML = error.innerHTML + '<li>Por favor completa el Nombre</li>'
              e.preventDefault();
          } else {
            error.style.display = 'none';
          }
        }

          function validarCorreo(e){
            if(correo.value == '' || correo.value == null){
                console.log('Por favor ingresa un correo');
                error.style.display = 'block';
                error.innerHTML = error.innerHTML + '<li>Por favor completa el Correo</li>'
                e.preventDefault();
            } else {
              error.style.display = 'none';
            }
          }

          function validarSexo(e){
            if(sexo.value == '' || sexo.value == null){
              console.log('Por favor ingresa el tipo de sexto');
              error.style.display = 'block';
              error.innerHTML = error.innerHTML + '<li>Por favor completa el Sexo</li>'
              e.preventDefault();
            } else {
              error.style.display = 'none';
            }
          }

          function validarTerminos(e){
            if(terminos.checked == false){
              console.log('Por favor acepta los terminos y condiciones');
              error.style.display = 'block';
              error.innerHTML = error.innerHTML + '<li>Es necesario aceptar los terminos y condiciones</li>'
              e.preventDefault();
            } else {
              error.style.display = 'none';
            }
          }

          function validarFormularios(e){
            error.innerHTML = '';

            validarNombre(e);
            validarCorreo(e);
            validarSexo(e);
            validarTerminos(e);
          }

        formulario.addEventListener('submit', validarFormularios);
}())
