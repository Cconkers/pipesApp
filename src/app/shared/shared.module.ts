import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent,CardModule
  ],
  imports: [
    CommonModule, PrimeNgModule
  ]
})
export class SharedModule { }
