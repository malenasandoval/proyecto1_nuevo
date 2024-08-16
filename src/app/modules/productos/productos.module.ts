// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTAMOS MODULO DE RUTEO DE PRODUCTOS
import { ProductosRoutingModule } from './productos-routing.module';

// VISTA
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { ProductoComponent } from './pages/producto/producto.component';

// COMPONENTES LOCALES
import { CardComponent } from './coomponents/card/card.component';
import { CardJuguetesComponent } from './coomponents/card-juguetes/card-juguetes.component';


@NgModule({
  declarations: [
    // DECLARACION DE MODULOS PERTENECIENTES A ESTE MODULO
    IndumentariaComponent,
    AlimentacionComponent,
    JugueteComponent,
    ProductoComponent,
    CardComponent,
    CardJuguetesComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    IndumentariaComponent,
    AlimentacionComponent,
    JugueteComponent,
    ProductoComponent,
    CardComponent,
    CardJuguetesComponent
  ]
})
export class ProductosModule { }
