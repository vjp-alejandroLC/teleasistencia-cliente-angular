import { TestBed } from '@angular/core/testing';

import { ModificarPacienteResolveService } from './modificar-paciente-resolve.service';

describe('ModificarPacientResolveService', () => {
  let service: ModificarPacienteResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarPacienteResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
