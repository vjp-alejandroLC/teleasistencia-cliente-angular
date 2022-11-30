import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRecursoComunitarioAlarmaComponent } from './modificar-recurso-comunitario-alarma.component';

describe('ModificarRecursoComunitarioAlarmaComponent', () => {
  let component: ModificarRecursoComunitarioAlarmaComponent;
  let fixture: ComponentFixture<ModificarRecursoComunitarioAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRecursoComunitarioAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRecursoComunitarioAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
