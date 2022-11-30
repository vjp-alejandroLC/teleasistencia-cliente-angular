import { TestBed } from '@angular/core/testing';

import { ModificarTipoModalidadPacienteResolveService } from './modificar-tipo-modalidad-paciente-resolve.service';

describe('DetallesTipoModalidadPacienteResolveService', () => {
  let service: ModificarTipoModalidadPacienteResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarTipoModalidadPacienteResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
