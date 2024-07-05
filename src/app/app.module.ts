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

// VINCULACIONES/ IMPORTACIONES CON FIREBASE
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


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
     // COMPONENTES GLOBALES
     SharedModule,
     // Inicializa firebase en nuestro proyecto
     AngularFireModule.initializeApp(environment.firebaseConfig),
     // Autentificación
     AngularFireAuthModule,
     // Storage -> BD de imágenes 
     AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }