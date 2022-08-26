import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.serie(1);
  }

  serie(n:number){
    const numeroFibonacci=this.getNumberTriangular()
    const numeroTriangular=this.getNumberPrimo()
    const numeroPrimo=this.getNumberFibonacci()
    const operacionSerie=(numeroFibonacci*n/numeroTriangular*n)*numeroPrimo
    return operacionSerie
  }

  getNumberTriangular(){
    return 3
  }
  getNumberPrimo(){
    return 2
  }
  getNumberFibonacci(){
    return 1
  }

}
