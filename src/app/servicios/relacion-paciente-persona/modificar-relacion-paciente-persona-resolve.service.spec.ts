import { TestBed } from '@angular/core/testing';

import { ModificarRelacionPacientePersonaResolveService } from './modificar-relacion-paciente-persona-resolve.service';

describe('ModificarRelacionPacientePersonaService', () => {
  let service: ModificarRelacionPacientePersonaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarRelacionPacientePersonaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
