import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IContact, Jobs, Tech } from './interfaces/interfaces';


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
    this.dialog.open(DialogMycontent);
  }


  constactForm: IContact = {
    nombre: '',
    email: '',
    mensaje: ''
  }


  tecnologias: Tech[] = [
    {
      nombre: 'HTML',
      imagen: "html5.webp"
    },
    {
      nombre: 'JavaScript',
      imagen: "javascript.png"
    },
    {
      nombre: 'CSS',
      imagen: "CSS3.jpg"
    },
    {
      nombre: 'Angular 8+',
      imagen: "angular.png"
    },
    {
      nombre: 'MySQL',
      imagen: "mysql.png"
    },
    {
      nombre: 'MongoDB',
      imagen: "mongodb.jpg"
    },
    {
      nombre: 'Node.js',
      imagen: "node.png"
    },
    {
      nombre: 'PostgrSQL',
      imagen: "postgres.png"
    },
  ]

  proyectos: Jobs[] = [
    {
      nombre: 'Hospital Administración',
      imagen: '',
      urlGithub: 'https://github.com/PabloChacon1997/angular-adv-adminpro',
      descripcion: 'Aplicación web para mantenimientos de hospitales'
    },
    {
      nombre: 'CRM',
      imagen: '',
      urlGithub: 'https://github.com/PabloChacon1997/CRMGraphQL',
      descripcion: 'Aplicación web para mantenimientos de pacientes'
    },
    {
      nombre: 'Web de Bienes Raices',
      imagen: '',
      urlGithub: 'https://github.com/PabloChacon1997/php_mvc_web',
      descripcion: 'Aplicación web de compra y venta para el mantenimiento de bienes raices'
    },
  ];



  submitForm() {
    // TODO: Enviar correo
    console.log(this.constactForm);
  }

}


@Component({
  selector: 'dialog-mycontent',
  templateUrl: './dialog-mycontent.html'
})
export class DialogMycontent {}
