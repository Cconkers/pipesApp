import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'ruben';
  nombreUpper: string = 'RUBEN';
  nombreCompleto: string = 'rUbEn';
  fecha: Date = new Date(); //el día de hoy
}
