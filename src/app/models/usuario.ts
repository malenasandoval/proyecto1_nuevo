// ESTRUCTURA que deben seguir los objetos del tipo USUARIO
export interface Usuario {
    uid: string | any; // atributos tipo any = reciben valores indefinidos
    nombre: string;
    apellido: string;
    email: string;
    password: string;
}