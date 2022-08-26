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
    fixture= TestBed.createComponent(CalculoComponent);
    let calculo:CalculoComponent;
    calculo = TestBed.inject(CalculoComponent);
    const n=1;
    
    const serie= calculo.serie(n);

    

    
  });
});
