import { Component, OnInit , Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalculoComponent } from '../calculo/calculo.component';

@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent implements OnInit {
  @Input() numeroForm:any=0;
  formIngresaNumero= new FormGroup({
    numeroForm: new FormControl('', Validators.required)
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  setNumber(form:any){
    console.log(form.numeroForm) 
    // return this.calculo.serie(form) 
  }

}
