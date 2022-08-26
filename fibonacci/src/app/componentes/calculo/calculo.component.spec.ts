import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoComponent } from './calculo.component';

describe('CalculoComponent', () => {
  let component: CalculoComponent;
  let fixture: ComponentFixture<CalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('1) Test numero natural 1',()=>{
    // fixture= TestBed.createComponent(CalculoComponent);
    // let calculo:CalculoComponent;
    // calculo = TestBed.inject(CalculoComponent);
    const n=1  
    const numeroFibonacci=1
    const numeroTriangular=3
    const numeroPrimo=2 
    // const check= calculo.serie(n);
    const operacionSerie= (numeroFibonacci*n/numeroTriangular*n)*numeroPrimo
    expect(operacionSerie).toEqual(0.6666666666666666)
  });

  it('2) Test numero natural 2',()=>{
    const n=2  
    const numeroFibonacci=1
    const numeroTriangular=3
    const numeroPrimo=2 
    const operacionSerie= (numeroFibonacci*n/numeroTriangular*n)*numeroPrimo
    expect(operacionSerie).toEqual(2.6666666666666665)
  });

  it('3) Test numero natural 3',()=>{
    const n=3
    const numeroFibonacci=1
    const numeroTriangular=3
    const numeroPrimo=2 
    const operacionSerie= (numeroFibonacci*n/numeroTriangular*n)*numeroPrimo
    expect(operacionSerie).toEqual(6)
  });

  it('4) Test numero natural 4',()=>{
    const n=4
    const numeroFibonacci=1
    const numeroTriangular=3
    const numeroPrimo=2 
    const operacionSerie= (numeroFibonacci*n/numeroTriangular*n)*numeroPrimo
    expect(operacionSerie).toEqual(10.666666666666666)
  });

  it('5) Test numero natural 5',()=>{
    const n=5
    const numeroFibonacci=1
    const numeroTriangular=3
    const numeroPrimo=2 
    const operacionSerie= (numeroFibonacci*n/numeroTriangular*n)*numeroPrimo
    expect(operacionSerie).toEqual(16.666666666666668)
  });
  
});
