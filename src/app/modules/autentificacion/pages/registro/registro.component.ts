// IMPORTACION DE COMPONENTES DE ANGULAR
import { Component } from '@angular/core';

// IMPORTACION DE INTERFAZ UUSUARIO
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    // Este "hide" es para el input de contraseña
    hide = true;

    // IMPORTACIÓN DEL MODELO / INTERFAZ
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      apellido: '',
      email: '',
      rol: '',
      password: ''
    }
  
    // CREAR UNA COLECCIÓN QUE SOLO RECIBE OBJETOS DEL TIPO USUARIOS
    coleccionUsuarios: Usuario[] = [];
  
    // FUNCIÓN PARA REGISTRO
    registrar(){
      // CREDENCIALES = información que ingrese el usuario
      const credenciales = {
        uid: this.usuarios.uid,
        nombre: this.usuarios.nombre,
        apellido: this.usuarios.apellido,
        email: this.usuarios.email,
        rol: this.usuarios.rol,
        password: this.usuarios.password
      }
  
      // enviamos los nuevos registros por medio del método push a la colección
      this.coleccionUsuarios.push(credenciales);
  
      // por consola
      console.log(credenciales);
      console.log(this.coleccionUsuarios)
    }
}
