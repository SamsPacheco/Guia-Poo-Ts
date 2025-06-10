export class Calculadora {
    private numero1:number;
    private numero2:number;

    constructor(a:number, b:number){
        this.numero1 = a;
        this.numero2 = b;
    }

    // Methods 
    suma():number{
        return this.numero1 + this.numero2
    }

    resta():number{
        return this.numero1 - this.numero2
    }

    multiplicar():number{
        return this.numero1 * this.numero2
    }

    dividir(): number | string{
        if(this.numero2===0){
            return 'El divisor no puede ser cero'
        }else{
            return (this.numero1 / this.numero2).toFixed(2)
        }
    }

    // gets
    getNumero1(){
        return this.numero1;
    }

    getNumero2(){
        return this.numero2
    }

}