// COMPONENTES IMPORTADOS DE ANGULAR 
import { Component } from '@angular/core';

// IMPORTACION DE INTERFAZ PERRO
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  // Propiedad pública de tipo array que contiene objetos del tipo Perro
  public info: Perro[];

  // Constructor del componente donde inicializamos la propiedad info
  constructor(){
    // Inicialización del array info con objetos Perro
    this.info = [
      {
        id: "",
        nombre: "Coco",
        edad: 5,
        imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
        alt: "Un perro"
      },
      {
        id: "",
        nombre: "Teo",
        edad: 7,
        imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
        alt: "Un perro"
      },
      {
        id: "",
        nombre: "Tom",
        edad: 10,
        imagen: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
        alt: "Un perro"
      }
    ]
  }
}