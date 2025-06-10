type Tipo = 'Ahorro' | 'Corriente';


export class Cuenta {
    private nombre:string;
    private cantidad:number = 0;
    private tipoCuenta:Tipo;
    private numeroCuenta:number;

    constructor(usuario:string, tipoCuenta:Tipo, Nocuenta:number  ){
        this.nombre = usuario;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = Nocuenta;
    }


    //gets 
    getNombre(){
        return this.nombre;
    }
    getCantidad(){
        return this.cantidad;
    }
    getTipoCuenta(){
        return this.tipoCuenta;
    }
    getNumeroCuenta(){
        return this.numeroCuenta;
    }

    depositar(monto:number){
        if(monto <= 5){
            this.cantidad = this.cantidad + monto;
            return "el monto del deposito debe de ser mayor a $5"
        }else if(monto > 5){
            this.cantidad = this.cantidad + monto;
            return "Depósito realizado con éxito!"
        }
    }

    retirar(monto:number){
        if(monto < 5){
            return 'el monto debe de ser mayor a $5 para poder retirar'
        }else{
            if(this.cantidad < monto){
                return `Saldo: ${this.cantidad} \nNo puede retirar más dinero del que dispone!`
            }else if( this.cantidad === monto || this.cantidad > monto){
                this.cantidad = this.cantidad - monto;
                return `retiro exitoso!`
            }
        }
    }

    getDataUser(){
        return`
        \nLos detalles del usuario ${this.getNombre()} son:\n- Número de cuenta: ${this.getNumeroCuenta()} \n- Tipo de cuenta: ${this.getTipoCuenta()} \n- Saldo disponible: $${this.getCantidad()}
        `
    }

    

}