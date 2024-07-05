// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  COMPONENTES LOCALES
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

// RUTAS
// variable de tipo array que contiene todas las rutas de la pagina
const routes: Routes = [
  // Ruta común -> 1 solo componente
  {
    path:"",component:InicioComponent
  },
  // carga perezosa -> ruta que te lleva a un modulo especifico
  // loadChildren: indica que habra una ruta hija
  // ()=> import: funcion flecha que importa desde la ruta de donde viene el modulo
  // .then: funcion asincronica del tipo promesa
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }