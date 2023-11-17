const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.previousElementSibling)