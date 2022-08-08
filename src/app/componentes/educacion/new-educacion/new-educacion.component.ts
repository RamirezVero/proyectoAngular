import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ServiceEducacionService } from 'src/app/servicios/service-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  titulo: string = '';
  institucion: string = '';
  conocimientos: string = '';
  inicio: string = '';
  fin: string ='';
  img: string = '';

  constructor(private serviceEducacion: ServiceEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educ = new Educacion(this.titulo, this.institucion, this.conocimientos, this.inicio, this.fin, this.img);
    this.serviceEducacion.save(educ).subscribe(
      data =>{
        alert("Educacion agregada");
        this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
