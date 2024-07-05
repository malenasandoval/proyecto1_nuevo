// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES LOCALES
// IMPORTACIÓN A LAS VISTAS DEL MÓDULO AUTENTIFICACIÓN
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

// RUTAS
const routes: Routes = [
  {
    path:"registro",component:RegistroComponent // ruta registro que carga el componente RegistroComponent cuando se navega a esta
  },
  {
    path:"inicio-sesion",component:InicioSesionComponent // ruta inicio-sesion que carga el componente InicioSesionComponent cuando se navega a esta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }