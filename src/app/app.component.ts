import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


interface Tech {
  nombre: string,
  imagen: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presentacion: string[] = ['Hola, soy Andrés Chacón'];
  presentacionSoy: string[] = ['Soy Front-End Developer'];
  presentacionY: string[] = ['y '];
  presentacionWeb: string[] = ['Web Developer'];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('Aki');
    this.dialog.open(DialogMycontent);
  }


  programLanguage: Tech[] = [
    {
      nombre: 'HTML5',
      imagen: 'html5.webp'
    },
    {
      nombre: 'CSS3',
      imagen: 'CSS3.jpg'
    },
    {
      nombre: 'Javascript',
      imagen: 'javascript.png'
    },
    {
      nombre: 'Angular',
      imagen: 'angular.png'
    },
  ];
  programBack: Tech[] = [
    {
      nombre: 'MySQL',
      imagen: 'mysql.png'
    },
    {
      nombre: 'PostgreSQL',
      imagen: 'postgres.png'
    },
    {
      nombre: 'MongoDB',
      imagen: 'mongodb.jpg'
    },
    {
      nombre: 'Nodejs',
      imagen: 'node.png'
    },
  ];
}


@Component({
  selector: 'dialog-mycontent',
  templateUrl: './dialog-mycontent.html'
})
export class DialogMycontent {}
