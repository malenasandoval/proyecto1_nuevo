// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES LOCALES
import { InicioComponent } from './pages/inicio/inicio.component';

//RUTAS
const routes: Routes = [
  {
    path:"",component: InicioComponent // "" -> ruta vacía, que se refiere a la ruta raíz del módulo de ruteo
  },
  {
    path:"inicio",component:InicioComponent  // "inicio" -> ruta específica que lleva al mismo componente Inicio
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }