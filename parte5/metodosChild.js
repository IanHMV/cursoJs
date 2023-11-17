const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo"

h2_antiguo = document.querySelector(".h2");

contenedor.removeChild(h2_antiguo);

let respuesta = contenedor.hasChildNodes();

if (respuesta){
    document.write("SI");
} else{
    document.write("NO");
}