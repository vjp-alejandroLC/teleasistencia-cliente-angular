import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRelacionPacientePersonaComponent } from './modificar-relacion-paciente-persona.component';

describe('ModificarRelacionPacientePersonaComponent', () => {
  let component: ModificarRelacionPacientePersonaComponent;
  let fixture: ComponentFixture<ModificarRelacionPacientePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRelacionPacientePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRelacionPacientePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
