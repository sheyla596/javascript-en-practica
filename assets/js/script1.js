let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
 
  event.preventDefault();
  
  // Llamar a la función limpiarErrores 
  limpiarErrores();

  // Campos de entrada del formulario
  let ingresarNombre = document.getElementById("nombre").value;
  let ingresarAsunto = document.getElementById("asunto").value;
  let ingresarMensaje = document.getElementById("mensaje").value;

  // Validar los campos de entrada 
  let resultado = validar(ingresarNombre, ingresarAsunto, ingresarMensaje);
 
  if (resultado == true) {
    exito();
  };
});

// Función validar los campos de entrada del formulario
function validar(nombre, asunto, mensaje) {
  
  let validacionExitosa = true;

  // Crear expresiones regulares para validar el nombre, el asunto y el mensaje
  let validacion= /[a-zA-Z]/gim;

  // Comprobar si el nombre, asunto y mensaje son válidos 
  if (validacion.test(nombre) == false) {
    
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido (solo se puede ingresar caracteres alfabeticos)."
    validacionExitosa = false;
  }
  if (validacion.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido (solo se puede ingresar caracteres alfabeticos)."
    validacionExitosa = false;
  }
  if (validacion.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido (solo se puede ingresar caracteres alfabeticos)."
    validacionExitosa = false;
  }

  // Devolver si pasamos la validación o no
  return validacionExitosa;
}

// Limpiar los mensajes de error
function limpiarErrores() {
  
  document.querySelector(".resultado").innerHTML = "";

  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
  // Mostrar un mensaje de éxito debajo del formulario
  document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";

  // Limpiar los campos de entrada del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("asunto").value = "";
  document.getElementById("mensaje").value = "";
};