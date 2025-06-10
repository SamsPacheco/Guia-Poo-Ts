export class Cancion{
    titulo:string;
    generoCancion:string;
    private autor:string;

    constructor(titulo:string, genero:string, autor:string){
        this.titulo = titulo;
        this.generoCancion = genero;
        this.autor = autor;
    }

    // get
    getNombreAutor(){
        return this.autor;
    }

    getDatosCancion(){
        return `
            \nlos datos de la canción perteneciente al autor: ${this.getNombreAutor()} son:\n\n - titulo: ${this.titulo}\n - género: ${this.generoCancion}
        `
    }

}