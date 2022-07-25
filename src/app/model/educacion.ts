export class Educacion {
    id?: number;
    titulo: string;
    institucion: string;
    conocimientos: string;
    inicio: string;
    fin: string;

    constructor( titulo: string, institucion: string, conocimientos: string, inicio: string, fin: string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.conocimientos = conocimientos;
        this.inicio = inicio;
        this.fin = fin;
    }
}
