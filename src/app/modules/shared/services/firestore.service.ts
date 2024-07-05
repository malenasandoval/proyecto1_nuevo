import { Injectable } from '@angular/core';

// IMPORTACION DE FIRESTORE Y COLECCIONES DE LA MISMA
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  
  // Definimos una colección de usuarios PRIVADA
  // Va a ser una colección de Firestore
  // Respetará la estructura de datos de la interfaz Usuario
  
  private usuariosCollection: AngularFirestoreCollection<Usuario> // colección privada de tipo AngularFirestoreCollection para almacenar documentos de tipo Usuario

  // Constructor del servicio, integra a AngularFirestore para relacionarse con Firestore
  constructor(private database: AngularFirestore) {
    this.usuariosCollection = this.database.collection<Usuario>('usuarios'); // inicialización de la colección de usuarios en Firestore
  }

  // metodo para agregar un usuario a Firestore
  agregarUsuario(usuario: Usuario, id: string){

    /* Generamos nueva PROMESA y utiliza los métodos:
      RESOLVE: promesa resuelta -> funciona correctamente
      REJECT: promesa rechaza -> ocurrió una falla
    */
    return new Promise(async (resolve, reject) => {

      // Bloque TRY encapsula la lógica resuelta
      try{
        usuario.uid = id; // asigna el id al usuario 

        /**
         * const resultado = colección de usuarios, envía como documento el UID 
         * y setea la información que ingresemos en el REGISTRO
         */

        const resultado = await this.usuariosCollection.doc(id).set(usuario); // guarda el usuario en Firestore usando el método set() en el documento con el ID dado
        resolve(resultado); // resuelve la promesa con el resultado exitoso

      }catch(error){ // bloque CATCH que encapsula una falla y la vuelve un error
        reject (error); // rechaza la promesa con el error ocurrido
      }
    })
  }
  
}
