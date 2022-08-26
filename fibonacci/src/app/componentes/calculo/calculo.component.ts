import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  num =2
  constructor() { }

  ngOnInit(): void {
    this.serie(1);
  }

  serie(n:number){
    const numeroFibonacci=this.getNumberTriangular()
    const numeroTriangular=this.getNumberPrimo()
    const numeroPrimo=this.getNumberFibonacci()
    // const numeroFibonacci=1
    // const numeroTriangular=3
    // const numeroPrimo=2 
    const operacion1=numeroFibonacci*n/numeroTriangular*n
    const operacionSerie= operacion1*numeroPrimo
    // console.log(n,numeroFibonacci,numeroTriangular,numeroPrimo)
    return operacionSerie
  }

  getNumberFibonacci(){
    const numeroFibonacci=1
    return numeroFibonacci
  }

  getNumberTriangular(){
    const numeroTriangular=3
    return numeroTriangular
  }
  getNumberPrimo(){
  const numerosPrimosArray = [];
  const cantidad=this.num//cantidad de numeros primos que tendrá el array

  for ( let j = 2;j < cantidad; j++) { //números primos comienzan a partir de dos
    if (this.validaPrimo(j)) {
      numerosPrimosArray.push(j);//generando array con números primos
    }    
  }
  //const numeroPrimo=2
    return numerosPrimosArray[0]//forzando a que regrese el primer número del array=>2
  }

  validaPrimo(num:number) {
    for (var i = 2; i < num; i++) { //números primos comienzan a partir de dos
      if (num % i === 0) {
        return false;
      } 
    }
    return num !== 1;
  }
 

}
