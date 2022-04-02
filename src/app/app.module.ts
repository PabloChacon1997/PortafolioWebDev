import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


/** Components */
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/** Angular Materia */
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


/** Typewritter Effect */
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    AngularTypewriterEffectModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
