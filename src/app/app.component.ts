import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IContact, Jobs, Tech } from './interfaces/interfaces';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy{
  presentacion: string[] = ['Hola, soy Andrés Chacón'];
  presentacionSoy: string[] = ['Soy Front-End Developer'];
  presentacionY: string[] = ['y '];
  presentacionWeb: string[] = ['Web Developer'];

  mediaSub!: Subscription;

  colCabecera: number = 1;
  rowHeightCabecera: string = '500px';
  colSubCabecera: number = 2;
  rowHeightSubCabecera: string = '480px';
  colTecnologias: number = 4;
  rowHeightTecnologias: string = '250px';
  colProyectos: number = 3;
  rowHeightProyectos: string = '450px';
  colContacto: number = 1;
  rowHeightContacto: string = '500px';
  
  constructor(public dialog: MatDialog, private mediaObserver:MediaObserver ) {}


  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((result: MediaChange[]) => {
      console.log(result[0].mqAlias);
      result[0].mqAlias === 'md' ? this.getDefaultLayout(): null;
      result[0].mqAlias === 'sm' ? this.getSmLayout(): null;
      result[0].mqAlias === 'lg' ? this.getSmLayout(): null;
      result[0].mqAlias === 'xs' ? this.getXsLayout(): null;
    })
  }


  getDefaultLayout() {
    this.colCabecera = 1;
    this.rowHeightCabecera = '500px';
    this.colSubCabecera = 2;
    this.rowHeightSubCabecera = '480px';
    this.colTecnologias = 4;
    this.rowHeightTecnologias = '250px';
    this.colProyectos = 3;
    this.rowHeightProyectos = '450px';
    this.colContacto = 1;
    this.rowHeightContacto = '500px';
  }

  getSmLayout() {
    this.colCabecera = 1;
    this.rowHeightCabecera = '900px';
    this.colSubCabecera = 1;
    this.rowHeightSubCabecera;
    this.colTecnologias = 3;
    this.rowHeightTecnologias;
    this.colProyectos = 2;
    this.rowHeightProyectos;
    this.colContacto;
    this.rowHeightContacto;
  }

  getXsLayout() {
    this.colCabecera = 1;
    this.rowHeightCabecera = '900px';
    this.colSubCabecera = 1;
    this.rowHeightSubCabecera;
    this.colTecnologias = 2;
    this.rowHeightTecnologias = '250px';
    this.colProyectos = 1;
    this.rowHeightProyectos;
    this.colContacto;
    this.rowHeightContacto;
  }

  downloadFile() {
    const downloadInstance = document.createElement('a');
    downloadInstance.href = 'http://localhost:4200/assets/CV.pdf';
    downloadInstance.target = '_blank';
    downloadInstance.download = 'CV Andres Chacon';

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
  }

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



  async submitForm(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_85dvzdn', 'template_6om45ua', e.target as HTMLFormElement, 'Ngp4-jMfBWtkGCyeW')
      .then( (result: EmailJSResponseStatus) => {
        alert('Mensaje enviado correctamente. Me pondre en contacto con usted lo antes posible. Gracias');
        this.constactForm.email = '';
        this.constactForm.nombre = '';
        this.constactForm.mensaje = '';
      }).catch(err => console.log(err));
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}


@Component({
  selector: 'dialog-mycontent',
  templateUrl: './dialog-mycontent.html'
})
export class DialogMycontent {}
