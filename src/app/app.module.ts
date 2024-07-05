// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// IMPORTAMOS MODULO PRINCIPAL DEL RUTEO -> TODAS LAS RUTAS GENERALES DE TODOS LOS MODULOS
import { AppRoutingModule } from './app-routing.module';

// IMPORTAMOS EL COMPONENTE PRINCIPAL DE APP
import { AppComponent } from './app.component';

// COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    // DECLARACION DE COMPONENTES PRINCIPAL
    AppComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }