import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
