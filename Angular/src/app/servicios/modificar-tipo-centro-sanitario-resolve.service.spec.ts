import { TestBed } from '@angular/core/testing';

import { ModificarTipoCentroSanitarioResolveService } from './modificar-tipo-centro-sanitario-resolve.service';

describe('DetallesTipoCentroSanitarioResolveService', () => {
  let service: ModificarTipoCentroSanitarioResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarTipoCentroSanitarioResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
