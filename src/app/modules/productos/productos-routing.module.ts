// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// VISTAS DEL MÓDULO PRODUCTO
// COMPONENTES LOCALES
import { ProductoComponent } from './pages/producto/producto.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

// RUTAS
const routes: Routes = [
  {
    path:"producto",component:ProductoComponent //ruta producto que carga el componente ProductoComponent cuando se navega a esta
  },
  {
    path:"alimentacion",component:AlimentacionComponent // ruta alimentacion que carga el componente AlimentacionComponent cuando se navega a esta
  },
  {
    path:"juguetes",component:JugueteComponent // ruta juguetes que carga el componente JuguetesComponent cuando se navega a esta
  },
  {
    path:"indumentaria",component:IndumentariaComponent // ruta /indumentaria que carga el componente IndumentariaComponent cuando se navega a esta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }