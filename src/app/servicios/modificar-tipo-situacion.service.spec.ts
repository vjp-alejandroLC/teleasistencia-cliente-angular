import { TestBed } from '@angular/core/testing';

import { ModificarTipoSituacionService } from './modificar-tipo-situacion.service';

describe('DetallesTipoSituacionService', () => {
  let service: ModificarTipoSituacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarTipoSituacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
