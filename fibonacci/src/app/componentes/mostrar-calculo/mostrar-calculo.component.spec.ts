import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCalculoComponent } from './mostrar-calculo.component';

describe('MostrarCalculoComponent', () => {
  let component: MostrarCalculoComponent;
  let fixture: ComponentFixture<MostrarCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
