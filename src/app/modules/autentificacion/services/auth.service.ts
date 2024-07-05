import { Injectable } from '@angular/core';  

// Servicio de AUTENTIFICACIÓN de FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';  

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  // Constructor para inicializar AngularFireAuth
  constructor(public auth: AngularFireAuth) { }

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

  // Función para tomar UID
  async obtenerUid(){
    // Nos va a generar una promesa, y la constante la va a capturar
    const user = await this.auth.currentUser;

    /*
      Si el usuario no respeta la estructura de la interfaz /
      Si tuvo problemas para el registro -> ej.: mal internet
    */
    if(user == null){
      return null;
    } else {
      return user.uid;
    }
  }
}
