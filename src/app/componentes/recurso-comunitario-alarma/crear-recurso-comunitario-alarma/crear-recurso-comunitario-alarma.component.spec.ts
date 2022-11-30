import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecursoComunitarioAlarmaComponent } from './crear-recurso-comunitario-alarma.component';

describe('CrearRecursoComunitarioAlarmaComponent', () => {
  let component: CrearRecursoComunitarioAlarmaComponent;
  let fixture: ComponentFixture<CrearRecursoComunitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRecursoComunitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecursoComunitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
