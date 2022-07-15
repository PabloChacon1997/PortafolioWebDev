import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tech } from './interfaces/interfaces';


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
}


@Component({
  selector: 'dialog-mycontent',
  templateUrl: './dialog-mycontent.html'
})
export class DialogMycontent {}
