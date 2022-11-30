import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRelacionPacientePersonaComponent } from './crear-relacion-paciente-persona.component';

describe('CrearRelacionPacientePersonaComponent', () => {
  let component: CrearRelacionPacientePersonaComponent;
  let fixture: ComponentFixture<CrearRelacionPacientePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRelacionPacientePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRelacionPacientePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
