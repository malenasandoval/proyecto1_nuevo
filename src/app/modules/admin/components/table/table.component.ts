import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear coleccion de productos del tipo producto -> lo definimos como un array
  coleccionProductos: Producto [] = [];

  // variable para manejar el estado de Edicion y Eliminacion de productos
  modalVisibleProducto: boolean = false;

  // variable que va a tomar le producto que nosotros elijamos
  productoSeleccionado!: Producto; // -> recibe valores vacios 

  // Definimos formulario para los productos
  /**
   * Atributos alfanumericos (string) se inicializa con comillas simples
   * Atributos numericos (number) se inicializa con cero 0
   */
  producto = new FormGroup ({
    nombre: new FormControl ('', Validators.required),
    precio: new FormControl (0, Validators.required),
    descripcion: new FormControl ('', Validators.required),
    categoria: new FormControl ('', Validators.required),
    imagen: new FormControl ('', Validators.required),
    alt: new FormControl ('', Validators.required),
  })

  constructor (public servicioCrud: CrudService){}

  ngOnInit(): void{
    // subscribe -> notifica constantemente los cambios actuales del sistema
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // guarda la información recibida como un nuevo "producto" a la colección
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    // validamos los valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto: Producto = {
        // idProducto no se toma porque es generado por la BD y no por el usuario
        idProducto: '',
        // el resto es tomado con información ingresada por el usuario
        nombre: this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregado un nuevo producto con éxito :)");
      })
      .catch(error => {
        alert("Hubo un problema al agregar un nuevo producto :(");
      })
    }
  }

  // funcion para alertar al usuario del producto que desea eliminar
  mostrarBorrar (productoSeleccionado: Producto){
    // abre el modal 
    this.modalVisibleProducto = true;

    // toma los valores del producto elegido
    this.productoSeleccionado = productoSeleccionado;
  }

  // funcion para eliminar definitivamente el producto
  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("el producto se ha eliminado correctemente")
    })
    .catch(error => {
      alert("no se ha podido eliminar el producto \n"+error);
    })
  }
}
