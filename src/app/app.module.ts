import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClienteComponent } from './httpcliente.component';
import { HttpBancoComponent } from './httpbanco.component';
import { HttpContratoComponent } from './httpcontrato.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HttpClienteComponent,
    HttpBancoComponent,
    HttpContratoComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'cliente',
    component: HttpClienteComponent
  },
  {
    path: 'banco',
    component: HttpBancoComponent
  },
  {
    path: 'contrato',
    component: HttpContratoComponent
  }
])
  ],
  providers: [HttpClienteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
