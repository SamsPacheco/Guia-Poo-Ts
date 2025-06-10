import { Persona } from "./Persona";

export class Empleado extends Persona {
    sueldo:number;

    constructor(nombre:string, apellido:string, direccion:string, telefono:number, edad:number, sueldo:number){
        super(nombre, apellido, direccion, telefono, edad);
            this.sueldo = sueldo;
    }

    
    getAllData(){
        return `
            \n- Nombre: ${this.nombre} \n- Apellido: ${this.apellido} \n- Edad: ${this.edad} \n- Dirección: ${this.direccion} \n- Telefono: ${this.telefono} \n- Sueldo: ${this.sueldo}
        `
    }

    cargarSueldo(nuevoSueldo:number){
        return this.sueldo = nuevoSueldo;
    }

    imprimirSueldo(): string{
        return `El sueldo del empleado ${this.nombre} es: ${this.sueldo}`
    }
}