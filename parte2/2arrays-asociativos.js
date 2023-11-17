let pc1= {
    nombre: "IanPc",
    procesador: "Intel",
    ram: "16gb",
    espacio: "1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de la pc es ${nombre} <br>
el procesador es ${procesador} <br>
la ram es de ${ram} <br>
el espaco en el disco es de ${espacio}`;

document.write(frase);
