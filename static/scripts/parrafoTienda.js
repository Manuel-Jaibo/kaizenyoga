var contenidoTodos = document.getElementById("contenidoTodos");
var contenidoUno = document.getElementById("contenidoUno");
var contenidoDos = document.getElementById("contenidoDos");

function botonColeccionTodos(){
  contenidoUno.style.display = "none";
  contenidoDos.style.display = "none";
  contenidoTodos.style.display = "flex";
} 


function botonColeccionUno(){
  contenidoDos.style.display = "none";
  contenidoTodos.style.display = "none";
  contenidoUno.style.display = "flex";
} 

function botonColeccionDos(){
  contenidoTodos.style.display = "none";
  contenidoUno.style.display = "none";
  contenidoDos.style.display = "flex";
}