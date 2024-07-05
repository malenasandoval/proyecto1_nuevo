// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTAMOS MODULO DE RUTEO DE PRODUCTOS
import { ProductosRoutingModule } from './productos-routing.module';

// COMPONENTES LOCALES
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    IndumentariaComponent,
    AlimentacionComponent,
    JugueteComponent,
    ProductoComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
