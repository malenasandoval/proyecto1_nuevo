import { Injectable } from '@angular/core';  

// Servicio de AUTENTIFICACIÓN de FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';  

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  // Constructor para inicializar AngularFireAuth
  constructor(public auth: AngularFireAuth) { }

  // Función para tomar UID

  // FUNCION REGISTRO
  registrar(email: string, password: string){
    // Retorna una promesa con la nueva información del usuario registrado usando email y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // FUNCION INICIO DE SESIÓN
  iniciarSesion(email: string, password: string){
    // Retorna una promesa que valida el email y la contraseña del usuario
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // FUNCION CERRAR SESIÓN
  cerrarSesion(){
    // Retorna una promesa que cierra la sesión del usuario actual
    return this.auth.signOut();
  }
}
