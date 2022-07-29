import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IContact, Jobs, Tech } from './interfaces/interfaces';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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
  
  // https://formsubmit.co/el/haxicu

  constructor(public dialog: MatDialog ) {

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

}


@Component({
  selector: 'dialog-mycontent',
  templateUrl: './dialog-mycontent.html'
})
export class DialogMycontent {}
