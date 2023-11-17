class animal{
    constructor(especie, edad, color) { // Abstraccion
        this.especie = especie; //
        this.edad = edad; 
        this.color=color;
        this.informacion=`Soy ${this.especie}, tengo ${this.edad} anos y soy de color ${this.color} <br>`
    }
    //Las funciones que pongamos adentro de la clase ya no se llaman funciones, se llama 'metodos'

    //Un metodo no puede ser una funcion flecha
    verInformacion(){
        document.write(this.informacion);
    }

    
}

//Herencia
class Perro extends animal{ // 'extends' se coloca para decir a cual clase quieres se le aplique la herencia.

    constructor(especie,edad,color,raza){ //Se colocan los parametros que se van a utilizar eso no cambia, lo unico que cambia es que no ocupas poner los this abajo de las propiedades que heredaste 

        super(especie,edad,color); //Se hereda con 'super' los parametros de la clase animal
        
        // this.raza=raza;
        this.raza=null;
    }
    static ladrar(){
        alert("guau");
    }
    
    set setRaza(newName){
        this.raza= newName;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro =  new Perro("perro",5,"marron","Doberman"); //No puedes tener un objeto con el mismo nombre que la clase

const gato = new animal("Gato",6,"blanco");
const pajaro = new animal("Pajaro",7,"verde");

perro.setRaza = "Pedro";
document.write(perro.getRaza + "<br>");

Perro.ladrar(); // Como vez el perro ladra

perro.verInformacion();// Como vez perro no fue creado con la clase animal, mas sin embargo, como utilizaste herencia, puedes utilizar los metodos de la clase animal

gato.verInformacion();
pajaro.verInformacion();

gato.ladrar(); // Pero el gato no puede ladrar porque no es la clase perro




