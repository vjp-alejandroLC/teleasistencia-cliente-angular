import { TestBed } from '@angular/core/testing';

import { CargaRelacionPacientePersonaService } from './carga-relacion-paciente-persona.service';

describe('CargaRelacionPacientePersonaService', () => {
  let service: CargaRelacionPacientePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaRelacionPacientePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
