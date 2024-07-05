// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// IMPORTACION DE MODULO PRINCIPAL DEL RUTEO -> TODAS LAS RUTAS GENERALES DE TODOS LOS MODULOS
import { AppRoutingModule } from './app-routing.module';

// IMPORTACION DE COMPONENTE PRINCIPAL DE LA APP WEB
import { AppComponent } from './app.component';

// COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module'; // modulo compartido, que se utiliza globalmente en la app web

// VINCULACIONES/ IMPORTACIONES CON FIREBASE
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //  modulo para inicializar Firebase en la app web utilizando la configuración específica del archivo environment
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // modulo para la Autentificación de usuarios con Firebase
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // modulo para almacenar archivos e imágenes de la BD

@NgModule({
  declarations: [
    // DECLARACION DE COMPONENTE PRINCIPAL
    AppComponent
  ],
  imports: [
    // IMPORTACION DE MODULOS NECESARIOS PARA ESTE MODULO
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
     // Inicializa firebase en nuestro proyecto
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }