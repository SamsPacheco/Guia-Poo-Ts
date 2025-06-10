
export abstract class Persona{
    nombre:string;
    apellido:string;
    direccion:string;
    telefono:number;
    edad:number;

    constructor(nombre:string, apellido:string, direccion:string, telefono:number, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    edadMayorMenor(){
        if(this.edad < 18){
            return `${this.nombre}, es menor de edad`
        }else if(this.edad >=18){
            return `${this.nombre}, es mayor de edad`   
        }
    }

    // una clase abstracta no se implementa en su base, sino que por medio de la subclase
    abstract getAllData():string;
}