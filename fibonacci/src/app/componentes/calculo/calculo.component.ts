import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  @Input() numeroForm:any=0;
  num =2
  constructor() { }

  ngOnInit(): void {
  let serieN= this.serie(1);
  }

  serie(n:any){       
    console.log(n+ "llegue a calculo")
    const numeroFibonacci=this.getNumberTriangular()
    const numeroTriangular=this.getNumberPrimo()
    const numeroPrimo=this.getNumberFibonacci()
    // const numeroFibonacci=1
    // const numeroTriangular=3
    // const numeroPrimo=2
    const operacion1=numeroFibonacci*n/numeroTriangular*n
    const operacionSerie= operacion1*numeroPrimo
    // console.log(n,numeroFibonacci,numeroTriangular,numeroPrimo)
   // this.numeroForm=operacionSerie   
    localStorage.setItem("operacionSerie",operacionSerie.toString()) //almacenar el operacionSerie en localstorage
    return operacionSerie
  }

  getNumberFibonacci(){
    const cantidad=this.num//cantidad de numeros triangular
    let j = 1 
    let numeroFibonacci = 1;
    
    const numerosFibonacciArray=[];
        for (let i = 1; i <= cantidad; i++)
        {
            j = j + 1;
            numeroFibonacci = numeroFibonacci + j;
            numerosFibonacciArray.push(numeroFibonacci);
        }
    //const numeroFibonacci=1
    return numerosFibonacciArray[0]//primer número
  }

  getNumberTriangular(){
    const cantidad=this.num//cantidad de numeros triangular
    let j = 1, numeroTriangular = 1;
    const numerosTrianguloArray=[];
        for (let i = 1; i <= cantidad; i++)
        {          
            numeroTriangular = (cantidad* (cantidad+1))/2 
            numerosTrianguloArray.push(numeroTriangular);
        }
    //const numeroTriangular=3
    return numerosTrianguloArray[1] //se pasa 2do número de array
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
