import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mostrar-calculo',
  templateUrl: './mostrar-calculo.component.html',
  styleUrls: ['./mostrar-calculo.component.css']
})
export class MostrarCalculoComponent implements OnInit {
  @Input() numeroForm:any=0;
  @Output() cambioNumero= new EventEmitter<any>();
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.cambioNumero.emit(this.numeroForm=this.getoperacionSerie());// sustituye por valor respuesta
  }

  getoperacionSerie(){
    return localStorage.getItem('operacionSerie');
  }

}
