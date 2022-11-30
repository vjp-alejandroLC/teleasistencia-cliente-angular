import { TestBed } from '@angular/core/testing';

import { ListaRelacionPacientePersonaResolveService } from './lista-relacion-paciente-persona-resolve.service';

describe('ListaRelacionPacientePersonaService', () => {
  let service: ListaRelacionPacientePersonaResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRelacionPacientePersonaResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
