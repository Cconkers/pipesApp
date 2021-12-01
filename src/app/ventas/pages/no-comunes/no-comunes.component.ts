import { Component } from '@angular/core';

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

anadirCliente(){
  this.clientes.push('1');
}
borrarCliente(){
this.clientes.shift();
}

}
