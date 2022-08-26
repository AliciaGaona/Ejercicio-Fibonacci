import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPrincipalComponent } from './componentes/formulario-principal/formulario-principal.component';
import { VistaPrincipalComponent } from './componentes/vista-principal/vista-principal.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentesGenerales/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPrincipalComponent,
    VistaPrincipalComponent,
    CalculoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
