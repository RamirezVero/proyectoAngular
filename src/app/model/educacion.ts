export class Educacion {
    id?: number;
    titulo: string;
    institucion: string;
    conocimientos: string;
    inicio: string;
    fin: string;
    img: string;

    constructor( titulo: string, institucion: string, conocimientos: string, inicio: string, fin: string, img: string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.conocimientos = conocimientos;
        this.inicio = inicio;
        this.fin = fin;
        this.img = img;
    }
}
