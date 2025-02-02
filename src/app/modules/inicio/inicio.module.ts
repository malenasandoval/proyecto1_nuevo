// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMMPORTACION DE MODULO DE RUTEO DE INICIO
import { InicioRoutingModule } from './inicio-routing.module';

// COMPONENTES LOCALES
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    // DECLARACION DE COMPONENTES LOCALES
    InicioComponent
  ],
  imports: [
     // IMPORTACIÓN DE MODULOS QUE SE NECESITAN ACA EN EL MODULO
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
