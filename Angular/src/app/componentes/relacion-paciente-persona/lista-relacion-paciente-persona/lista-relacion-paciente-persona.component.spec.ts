import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelacionPacientePersonaComponent } from './lista-relacion-paciente-persona.component';

describe('ListaRelacionPacientePersonaComponent', () => {
  let component: ListaRelacionPacientePersonaComponent;
  let fixture: ComponentFixture<ListaRelacionPacientePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRelacionPacientePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelacionPacientePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
