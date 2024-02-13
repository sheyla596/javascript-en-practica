// Seleccionamos las variables con los que vamos a trabajar
let num1 = document.querySelector("#valor1");
let num2 = document.querySelector("#valor2");
let suma = document.querySelector("#btn-sumar");
let resta = document.querySelector("#btn-restar");

let resultado = document.querySelector(".resultado");

// Agregamos un evento click 
// Para sumar los valores ingresados
suma.addEventListener("click", function () {
  let sumar = parseInt(num1.value) + parseInt(num2.value);
  resultado.innerHTML = sumar;
});

// Agregamos un evento click 
// Para restar los valores ingresados y si es un valor negativo devuelve resultado cero
resta.addEventListener("click", function () {
  let restar = parseInt(num1.value) - parseInt(num2.value);
  if (restar < 0) {
    restar = 0;
  }
  resultado.innerHTML = restar;
});