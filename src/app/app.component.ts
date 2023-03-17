import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaEstudiantes: any[] = [
    { nombre: 'Felipe Segovia', estado: 'Regular'},
    { nombre: 'Dharma Perez', estado: 'Regular'},
    { nombre: 'Tommy el gato', estado: 'Regular'},
    { nombre: 'Juan Carlos', estado: 'Promocionado'},
    { nombre: 'Juan Carlos', estado: 'Libre'},
  ]
  mostrar = true;
  toogle(): void{
    this.mostrar = !this.mostrar

  }
  // texto = '';

  // text = 'Esto es un video sobre event binding';

  // cambiarTexto() : void {
  //   this.text = 'En el proximo video vamos a ver Two way data-binding';
  // }


  // nombre = 'Pipe'
  // textoPlaceholder = 'Escriba algo aquí';
  // desabilitado = true;
  // imgSrc = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
  // constructor(){
  //   setInterval( ()=> this.desabilitado = false , 3000)
  // }
  // getSuma(numero1: number, numero2: number){
  //   return numero1 + numero2
  // }
}
