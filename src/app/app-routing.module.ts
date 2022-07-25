import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencias/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editeduc/:id', component: EditEducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
