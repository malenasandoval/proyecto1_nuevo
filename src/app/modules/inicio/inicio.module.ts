// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMMPORTACION DE MODULO DE RUTEO DE INICIO
import { InicioRoutingModule } from './inicio-routing.module';

// COMPONENTES LOCALES
// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';

// COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    InicioComponent,
    CardComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    // EXPORTACION DE MODULOS Y COMPONENTES PARA UTILIZAR EN OTROS MODULOS
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
