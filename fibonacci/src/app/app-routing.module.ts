import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from './componentes/vista-principal/vista-principal.component';

const routes: Routes = [
  {path:'', redirectTo:'PrincipalNumeros', pathMatch:'full'},
  {path:'PrincipalNumeros', component:VistaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[VistaPrincipalComponent]