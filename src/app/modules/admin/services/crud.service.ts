import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Definimos coleccion para los productos de la web del tipo Producto
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) { 
    // Referenciamos coleccion productos y sera subida como "producto" a Firebase
    this.productosCollection = database.collection('producto');
  }

  // CREAR PRODUCTOS
  crearProducto(producto: Producto){
    return new Promise(async (resolve, reject) => {
      try{
        // Creamos numero indentificativo para el producto en la base de datos
        const idProducto = this.database.createId();
        // Asignamos ID creadp al atributo idProducto de la interfaz Productos
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);

      }catch(error){
        reject(error);
      }
    })  
  }

  // OBTENER PRODUCTOS
  obtenerProducto(){
    // snapshotChanges -> toma una captura del estado de los datos
    // pipe -> funciona como una tubería que retorna el nuevo arreglo de datos
    // map -> "mapea" o recorre esa nueva información
    // a -> resguarda la nueva información y la envía
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())));
  }

  // EDITAR PRODUCTOS
  // ELIMINAR PRODUCTOS
  eliminarProducto(idProducto: string){
    return new Promise ((resolve, reject) => {
      try {
        // accedo a la coleccion, busco su ID y lo elimino
        const respuesta = this.productosCollection.doc(idProducto).delete();
        resolve(respuesta);
      } 
      catch(error) {
        reject(error);
      }
    })
  }
}
