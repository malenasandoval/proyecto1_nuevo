// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTACION DE MODULO DE RUTEO DE AUTENTIFICACION
import { AutentificacionRoutingModule } from './autentificacion-routing.module';

// COMPONENTES LOCALES
// VISTAS DEL MÓDULO AUTENTIFICACIÓN
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

// IMPORTACION DE COMPONENTES DE ANGULAR MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

// COMPONENTES DE ANGULAR
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    AutentificacionRoutingModule,
    // ANGULAR MATERIAL
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    // ANGULAR
    FormsModule,
  ],
  exports: [
    // EXPORTACION DE MODULOS Y COMPONENTES PARA UTILIZAR EN OTROS MODULOS
    RegistroComponent,
    InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AutentificacionModule { }