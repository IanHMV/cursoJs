class animal{
    constructor(especie, edad, color) { //Lo de adentro del parentecis son parametros
        this.especie = especie; //this.especie (una propiedad), no se refiere a los parametros, se refiere al objeto
        this.edad = edad; //Lo que va despues del igual, son los parametros
        this.color=color;
        this.informacion=`Soy ${this.especie}, tengo ${this.edad} anos y soy de color ${this.color}`
    }
    //Las funciones que pongamos adentro de la clase ya no se llaman funciones, se llama 'metodos'

    //Un metodo no puede ser una funcion flecha
    verInformacion(){
        document.write(this.informacion);
    }
}

const perro = new animal("Perro",5,"Rojo"); //Lo que hace 'new', es instanciar un objeto. Lo que quiere decir esa linea es que: Perro va a ser igual a un objeto de la clase animal

console.log(perro)

perro.verInformacion();