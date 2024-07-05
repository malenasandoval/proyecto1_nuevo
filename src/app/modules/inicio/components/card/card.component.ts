// COMPONENTES IMPORTADOS DE ANGULAR 
import { Component } from '@angular/core';

// IMPORTAMOS INTERFAZ PERRO
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
    this.info = [
      {
        id: "",
        nombre: "Coco",
        edad: 5,
        imagen: "https://i1.sndcdn.com/artworks-000190784980-i4qoly-t500x500.jpg",
        alt: "Un perro"
      },
      {
        id: "",
        nombre: "Teo",
        edad: 7,
        imagen: "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg",
        alt: "Un perro"
      },
      {
        id: "",
        nombre: "Tom",
        edad: 10,
        imagen: "https://eraverde.com.ar/wp-content/uploads/2018/08/carpincho_roger.jpg",
        alt: "Un perro"
      }
    ]
  }
}