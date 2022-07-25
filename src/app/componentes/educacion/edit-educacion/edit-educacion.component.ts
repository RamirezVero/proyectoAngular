import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ServiceEducacionService } from 'src/app/servicios/service-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  education: Educacion = null;

  constructor(private serviceEducacion: ServiceEducacionService, private activatedRouter: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceEducacion.detail(id).subscribe(
      data =>{
        this.education = data;
      },err =>{
        alert("Error al modificar Educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceEducacion.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar Educación");
        this.router.navigate(['']);
      }
    )
  }

}
