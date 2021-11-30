import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 valueString: string = 'rUbEn';
 valueNumber: number = 1000;
 valueObject: object = {
   name: 'Rubén'
 };

 mostrarNombre() {
   console.log(this.valueString);
 }
}
