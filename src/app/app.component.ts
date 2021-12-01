import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valueString: string = 'rUbEn';
  valueNumber: number = 1000;
  valueObject: object = {
    name: 'Rubén',
  };

  constructor(private primengConfig: PrimeNGConfig) {}

ngOnInit(){
  this.primengConfig.ripple = true;
}

  mostrarNombre() {
    console.log(this.valueString);
  }
}
