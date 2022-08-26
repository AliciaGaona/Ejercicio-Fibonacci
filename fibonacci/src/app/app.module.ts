import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPrincipalComponent } from './componentes/formulario-principal/formulario-principal.component';
import { VistaPrincipalComponent } from './componentes/vista-principal/vista-principal.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPrincipalComponent,
    VistaPrincipalComponent,
    CalculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
