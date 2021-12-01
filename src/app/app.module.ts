import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import { registerLocaleData} from '@angular/common'
import  localeEs  from '@angular/common/locales/es-HN';
import  localeJa  from '@angular/common/locales/ja';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEs);
registerLocaleData(localeJa);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNgModule, SharedModule, AppRouterModule, VentasModule,BrowserAnimationsModule],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-HN'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
