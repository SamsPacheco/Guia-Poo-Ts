// debe contener 3 metodos 
/*
    -> mth #1 obtiene el title, color y font de la pagina
    -> mth #2 debemos indicar la posicion del title (derecha, centro, izquierda)
    -> mth #3 imprimira todas las propiedades

*/
type PositionText = 'derecha' | 'centro' | 'izquierda';

// extraemos todas las etiquetas del DOM
const allTags = [...document.querySelectorAll('*')];

// eliminamos las tags duplicadas
const uniqueTags = [...new Set(allTags)];


export class pagina {
    title:string;
    color:string;
    fontPage:string;
    allProperties:object = {};


    constructor(title:string, color:string, font:PositionText){
        this.title = title;
        this.color = color;
        this.fontPage = font;
        this.allProperties = uniqueTags.map( tag => { return {tag}})
    }

    getProperties(): string{
        return `
            \nLas propiedades de la página: ${this.title} son:\n\n - Estilo de fuente: ${this.fontPage}\n - Color: ${this.color}
        `
    }

    titlePosition(position:PositionText){
        if(position === 'derecha' || position === 'izquierda'){
            return `\nEl texto estará posicionado hacia la ${position}`
        }else{
            return `\nEl texto estará posicionado al ${position}`
        }
    }

    getAllProperties(){
        return this.allProperties
    }
}