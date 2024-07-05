import { Injectable } from '@angular/core';  

// Servicio de AUTENTIFICACIÓN de FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';  
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {

  // Constructor para inicializar AngularFireAuth
constructor(
    private auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ) { }

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

  // FUNCION PARA TOMAR UID
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

// Función que busca un usuario en la colección de 'usuarios' cuyo correo electrónico coincida con el valor proporcionado
  obtenerUsuario(email: string){
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
}