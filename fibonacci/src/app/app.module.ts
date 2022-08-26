import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPrincipalComponent } from './componentes/formulario-principal/formulario-principal.component';
import { VistaPrincipalComponent } from './componentes/vista-principal/vista-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPrincipalComponent,
    VistaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
