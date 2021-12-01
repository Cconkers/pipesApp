import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
//i18Select
nombre:string = 'Rubén';
genero:string = 'masculino';

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'intivarla'
};

cambiarCliente(){
if (this.nombre == 'Rubén' && this.genero == 'masculino') {
  this.nombre = 'Lucía'; this.genero = 'femenino'
}else if (this.nombre == 'Lucía' && this.genero == 'femenino'){
  this.nombre = 'Rubén'; this.genero = 'masculino';
}
}

//i18Plural
clientes:string[] = ['1', '2', '3', '4'];
clientesMapa = {
  '=0' : 'no tenemos ningún cliente esperando.' ,
  '=1' : 'tenemos un cliente esperando.',
  '=2' : 'tenemos dos clientes esperando.',
  'other' : 'tenemos # clientes esperando'
};
//Buttons
cantidadArray:number = 0;
anadirCliente(){
  this.cantidadArray = this.clientes.length + 1
  this.clientes.push(this.cantidadArray.toString());
}
borrarCliente(){
this.clientes.shift();
}

//KeyValue Pipe
persona = {
nombre: 'Rubén',
edad: 30,
direccion: 'Wall St, NY.'
}

//JsonPipe
heroes = [
  {
  nombre: 'Superman',
  vuela: true,
  },
  {
  nombre: 'Aquaman',
  vuela: false,
  },
  {
  nombre: 'Robin',
  vuela: false,
  }
]

//Async Pipe
miObservable = interval(2000); // 0, 1, 2, 3, 4, 5, 6, 7...

valorPromesa = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('Tenemos data de promesa');
  },3500);
});

}
